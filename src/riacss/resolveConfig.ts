import mergeWith from 'lodash/mergeWith';
import isUndefined from 'lodash/isUndefined';
import get from 'lodash/get';
import toPath from 'lodash/toPath';
import isFunction from 'lodash/isFunction';

function mergeWithExtendProps(merged, extend) {
    return mergeWith(merged, extend, (mergedValue, extendValue) => {
        if (isUndefined(mergedValue)) {
            return [extendValue];
        }

        if (Array.isArray(mergedValue)) {
            return [extendValue, ...mergedValue];
        }

        return [extendValue, mergedValue];
    });
}

function mergeThemes(themes) {
    const theme = themes.reduce((merged, t) => ({
        ...merged,
        ...t,
    }), {});
    // 将extend的属性连接为数组形式，备后续使用
    const extendWithArrayProps = themes.reduce(
        (merged, { extend }) => mergeWithExtendProps(merged, extend),
        {},
    );

    return {
        ...(({ extend, ...t }) => t)(theme),
        extend: extendWithArrayProps,
    };
}

function mergeExtends(theme, extend) {
    return mergeWith(theme, extend, (themeValue, extendValue) => {
        // 对于像theme.colors这样的属性，不能直接合并，应该合并其下的font，background之类
        if (Object.values(themeValue).every((themeItem) => typeof themeItem === 'object')) {
            const extendWithArrayProps = extendValue.reduce(
                (merged, extendProp) => mergeWithExtendProps(merged, extendProp),
                {},
            );
            return mergeExtends(themeValue, extendWithArrayProps);
        }

        return {
            ...themeValue,
            ...Object.assign({}, ...extendValue),
        };
    });
}

function resolveConfigTheme(configs) {
    const themes = configs.map((config) => get(config, 'theme', {}));
    const { extend, ...mergedTheme } = mergeThemes(themes);

    return mergeExtends(mergedTheme, extend);
}

function resolveConfigStyle(configs, theme) {
    function themeGetter(pathStr, defaultValue) {
        const path = toPath(pathStr);
        let index = 0;
        let val = theme;

        while (val !== undefined && val !== null && index < path.length) {
            val = val[path[index]];
            val = isFunction(val) ? val(themeGetter) : val;
            index += 1;
        }

        return val === undefined ? defaultValue : val;
    }
    const style = configs
        .map((config) => get(config, 'style', {}))
        .reduce((merged, s) => ({
            ...merged,
            ...s,
        }));

    return Object.keys(style).reduce((resolved, key) => ({
        ...resolved,
        [key]: isFunction(style[key]) ? style[key](themeGetter) : style[key],
    }), {});
}

export type ResolvedConfig = ReturnType<typeof resolveConfig>;

// 来自于postcss-tiger-ria插件中的相同方法，返回略作调整
export default function resolveConfig(configs: any[]) {
    const theme = resolveConfigTheme(configs);
    const style = resolveConfigStyle(configs, theme);
    const config = Object.assign({}, ...configs, {
        theme,
        style,
    });
    const getConfigValue = (path: string, defaultValue?) => get(config, path, defaultValue);

    return {
        config: getConfigValue,
        style: (path: string, defaultValue?) => getConfigValue(`style.${path}`, defaultValue),
    };
}
