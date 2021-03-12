import _ from 'lodash';
import postcss from 'postcss';
import Node from 'postcss/lib/node';
import postcssNested from 'postcss-nested';
import postcssJs from 'postcss-js';
import parser from 'postcss-selector-parser';
import get from 'lodash/get';

type ResolvedConfig = import('./resolveConfig').ResolvedConfig;
type Classes = import('./generateClasses').Classes;

function escapeClassName(className) {
    const node = parser.className({ value: className });
    return get(node, 'raws.value', node.value);
}

function parseStyles(styles) {
    if (!Array.isArray(styles)) {
        return parseStyles([styles]);
    }

    return _.flatMap(styles, (style) => (style instanceof Node ? style : parseObjectStyles(style)));
}

function parseObjectStyles(styles) {
    return postcss([
        postcssNested({
            bubble: ['screen']
        })
    ]).process(styles, {
        parser: postcssJs
    }).root.nodes;
}

export default function parsePlugins(resolveConfig: ResolvedConfig): Classes {
    const { plugins, config } = resolveConfig;
    const parsedClassesSet = new Set<string>();

    plugins.forEach((plugin) => {
        plugin({
            config,
            style: (path, defaultValue) => config(`style.${path}`, defaultValue),
            escape: escapeClassName,
            addUtilities: (utilities) => {
                const rules = parseStyles(utilities);

                rules.forEach((item) => {
                    const { selectors } = item;
                    selectors.forEach((selector: string) => {
                        selector
                            .split(' ')
                            .filter(Boolean)
                            .forEach((subSelector) => {
                                let startWithClassSelector = false;
                                subSelector.split('.').forEach((subItem, index) => {
                                    if (!subItem && index === 0) {
                                        startWithClassSelector = true;
                                        return;
                                    }
                                    if (!startWithClassSelector && index === 0) {
                                        return;
                                    }
                                    const pseudoIndex = subItem.indexOf(':');
                                    if (pseudoIndex === -1) {
                                        parsedClassesSet.add(subItem);
                                        return;
                                    }
                                    const subItemWithoutPseudoClass = subItem.slice(0, pseudoIndex);
                                    parsedClassesSet.add(subItemWithoutPseudoClass);
                                });
                            });
                    });
                });
            }
        });
    });

    return Array.from(parsedClassesSet);
}
