import map from 'lodash/map';
import flatMap from 'lodash/flatMap';
import concat from 'lodash/concat';

type ResolvedConfig = import('./resolveConfig').ResolvedConfig;
type Classes = import('./generateClasses').Classes;

export default function(resolvedConfig: ResolvedConfig): Classes {
    const { style, variants } = resolvedConfig;

    const displayVariants = variants('display')?.toString();
    const display = map(style('display'), (value, key) => ({
        name: className('', key, 'display'),
        variants: displayVariants
    }));

    const overflowVariants = variants('overflow')?.toString();
    const overflow = flatMap(style('overflow'), (value, key) => [
        { name: className('overflow', key, 'overflow'), variants: overflowVariants },
        { name: className('overflow-x', key, 'overflow'), variants: overflowVariants },
        { name: className('overflow-y', key, 'overflow'), variants: overflowVariants },
    ]);

    const positionVariants = variants('position')?.toString();
    const position = map(style('position'), (value, key) => ({
        name: className('', key, 'position'),
        variants: positionVariants
    }));

    const positionSpacingVariants = variants('positionSpacing')?.toString();
    const positionSpacing = flatMap(style('positionSpacing'), (value, key) => [
        { name: className('top', key, 'positionSpacing'), variants: positionSpacingVariants },
        { name: className('right', key, 'positionSpacing'), variants: positionSpacingVariants },
        { name: className('bottom', key, 'positionSpacing'), variants: positionSpacingVariants },
        { name: className('left', key, 'positionSpacing'), variants: positionSpacingVariants },
    ]);

    const visibilityVariants = variants('visibility')?.toString();
    const visibility = map(style('visibility'), (value, key) => ({
        name: className('', key, 'visibility'),
        variants: visibilityVariants
    }));

    const zIndexVariants = variants('zIndex')?.toString();
    const zIndex = map(style('zIndex'), (value, key) => ({
        name: className('z', key, 'zIndex'),
        variants: zIndexVariants
    }));

    const flexVariants = variants('flex')?.toString();
    const flex = map(style('flex'), (value, key) => ({
        name: className('flex', key, 'flex'),
        variants: flexVariants
    }));

    const flexDirectionVariants = variants('flexDirection')?.toString();
    const flexDirection = map(style('flexDirection'), (value, key) => ({
        name: className('flex', key, 'flexDirection'),
        variants: flexDirectionVariants
    }));

    const flexWrapVariants = variants('flexWrap')?.toString();
    const flexWrap = map(style('flexWrap'), (value, key) => ({
        name: className('flex', key, 'flexWrap'),
        variants: flexWrapVariants
    }));

    const flexShrinkVariants = variants('flexShrink')?.toString();
    const flexShrink = map(style('flexShrink'), (value, key) => ({
        name: className('flex-shrink', key, 'flexShrink'),
        variants: flexShrinkVariants
    }));

    const flexGrowVariants = variants('flexGrow')?.toString();
    const flexGrow = map(style('flexGrow'), (value, key) => ({
        name: className('flex-grow', key, 'flexGrow'),
        variants: flexGrowVariants
    }));

    const alignItemsVariants = variants('alignItems')?.toString();
    const alignItems = map(style('alignItems'), (value, key) => ({
        name: className('items', key, 'alignItems'),
        variants: alignItemsVariants
    }));

    const alignContentVariants = variants('alignContent')?.toString();
    const alignContent = map(style('alignContent'), (value, key) => ({
        name: className('content', key, 'alignContent'),
        variants: alignContentVariants
    }));

    const justifyContentVariants = variants('justifyContent')?.toString();
    const justifyContent = map(style('justifyContent'), (value, key) => ({
        name: className('justify', key, 'justifyContent'),
        variants: justifyContentVariants
    }));

    const alignSelfVariants = variants('alignSelf')?.toString();
    const alignSelf = map(style('alignSelf'), (value, key) => ({
        name: className('self', key, 'alignSelf'),
        variants: alignSelfVariants
    }));

    const orderVariants = variants('order')?.toString();
    const order = map(style('order'), (value, key) => ({
        name: className('order', key, 'order'),
        variants: orderVariants
    }));

    const marginVariants = variants('margin')?.toString();
    const margin = flatMap(style('margin'), (value, key) => [
        { name: className('m', key, 'margin'), variants: marginVariants },
        { name: className('mx', key, 'margin'), variants: marginVariants },
        { name: className('my', key, 'margin'), variants: marginVariants },
        { name: className('mt', key, 'margin'), variants: marginVariants },
        { name: className('mr', key, 'margin'), variants: marginVariants },
        { name: className('mb', key, 'margin'), variants: marginVariants },
        { name: className('ml', key, 'margin'), variants: marginVariants },
    ]);

    const paddingVariants = variants('padding')?.toString();
    const padding = flatMap(style('padding'), (value, key) => [
        { name: className('p', key, 'padding'), variants: paddingVariants },
        { name: className('px', key, 'padding'), variants: paddingVariants },
        { name: className('py', key, 'padding'), variants: paddingVariants },
        { name: className('pt', key, 'padding'), variants: paddingVariants },
        { name: className('pr', key, 'padding'), variants: paddingVariants },
        { name: className('pb', key, 'padding'), variants: paddingVariants },
        { name: className('pl', key, 'padding'), variants: paddingVariants },
    ]);

    const widthVariants = variants('width')?.toString();
    const width = map(style('width'), (value, key) => ({
        name: className('w', key, 'width'),
        variants: widthVariants
    }));

    const heightVariants = variants('height')?.toString();
    const height = map(style('height'), (value, key) => ({
        name: className('h', key, 'height'),
        variants: heightVariants
    }));

    const fontSizeVariants = variants('fontSize')?.toString();
    const fontSize = map(style('fontSize'), (value, key) => ({
        name: className('font', key, 'fontSize'),
        variants: fontSizeVariants
    }));

    const fontWeightVariants = variants('fontWeight')?.toString();
    const fontWeight = map(style('fontWeight'), (value, key) => ({
        name: className('font', key, 'fontWeight'),
        variants: fontWeightVariants
    }));

    const lineHeightVariants = variants('lineHeight')?.toString();
    const lineHeight = map(style('lineHeight'), (value, key) => ({
        name: className('leading', key, 'lineHeight'),
        variants: lineHeightVariants
    }));

    const textAlignVariants = variants('textAlign')?.toString();
    const textAlign = map(style('textAlign'), (value, key) => ({
        name: className('text', key, 'textAlign'),
        variants: textAlignVariants
    }));

    const verticalAlignVariants = variants('verticalAlign')?.toString();
    const verticalAlign = map(style('verticalAlign'), (value, key) => ({
        name: className('align', key, 'verticalAlign'),
        variants: verticalAlignVariants
    }));

    const whitespaceVariants = variants('whitespace')?.toString();
    const whitespace = map(style('whitespace'), (value, key) => ({
        name: className('whitespace', key, 'whitespace'),
        variants: whitespaceVariants
    }));

    const overflowWrapVariants = variants('overflowWrap')?.toString();
    const overflowWrap = map(style('overflowWrap'), (value, key) => ({
        name: className('', key, 'overflowWrap'),
        variants: overflowWrapVariants
    }));

    const wordBreakVariants = variants('wordBreak')?.toString();
    const wordBreak = map(style('wordBreak'), (value, key) => ({
        name: className('', key, 'workBreak'),
        variants: wordBreakVariants
    }));

    const colorVariants = variants('color')?.toString();
    const color = map(style('color'), (value, key) => ({
        name: className('text', key, 'color'),
        variants: colorVariants
    }));

    const backgroundAttachmentVariants = variants('backgroundAttachment')?.toString();
    const backgroundAttachment = map(style('backgroundAttachment'), (value, key) => ({
        name: className('bg', key, 'backgroundAttachment'),
        variants: backgroundAttachmentVariants
    }));

    const backgroundPositionVariants = variants('backgroundPosition')?.toString();
    const backgroundPosition = map(style('backgroundPosition'), (value, key) => ({
        name: className('bg', key, 'backgroundPosition'),
        variants: backgroundPositionVariants
    }));

    const backgroundRepeatVariants = variants('backgroundRepeat')?.toString();
    const backgroundRepeat = map(style('backgroundRepeat'), (value, key) => ({
        name: className('bg', key, 'backgroundRepeat'),
        variants: backgroundRepeatVariants
    }));

    const backgroundSizeVariants = variants('backgroundSize')?.toString();
    const backgroundSize = map(style('backgroundSize'), (value, key) => ({
        name: className('bg', key, 'backgroundSize'),
        variants: backgroundSizeVariants
    }));

    const backgroundColorVariants = variants('backgroundColor')?.toString();
    const backgroundColor = map(style('backgroundColor'), (value, key) => ({
        name: className('bg', key, 'backgroundColor'),
        variants: backgroundColorVariants
    }));

    const borderWidthVariants = variants('borderWidth')?.toString();
    const borderWidth = flatMap(style('borderWidth'), (value, key) => [
        { name: className('border', key, 'borderWidth'), variants: borderWidthVariants },
        { name: className('border-t', key, 'borderWidth'), variants: borderWidthVariants },
        { name: className('border-r', key, 'borderWidth'), variants: borderWidthVariants },
        { name: className('border-b', key, 'borderWidth'), variants: borderWidthVariants },
        { name: className('border-l', key, 'borderWidth'), variants: borderWidthVariants }
    ]);

    const borderColorVariants = variants('borderColor')?.toString();
    const borderColor = map(style('borderColor'), (value, key) => ({
        name: className('border', key, 'borderColor'),
        variants: borderColorVariants
    }));

    const borderStyleVariants = variants('borderStyle')?.toString();
    const borderStyle = map(style('borderStyle'), (value, key) => ({
        name: className('border', key, 'borderStyle'),
        variants: borderStyleVariants
    }));

    const borderRadiusVariants = variants('borderRadius')?.toString();
    const borderRadius = map(style('borderRadius'), (value, key) => ({
        name: className('rounded', key, 'borderRadius'),
        variants: borderRadiusVariants
    }));

    const cursorVariants = variants('cursor')?.toString();
    const cursor = map(style('cursor'), (value, key) => ({
        name: className('cursor', key, 'cursor'),
        variants: cursorVariants
    }));

    const outlineVariants = variants('outline')?.toString();
    const outline = map(style('outline'), (value, key) => ({
        name: className('outline', key, 'outline'),
        variants: outlineVariants
    }));

    const resizeVariants = variants('resize')?.toString();
    const resize = map(style('resize'), (value, key) => ({
        name: className('resize', key, 'resize'),
        variants: resizeVariants
    }));

    const staticClasses = [
        { name: 'truncate', variants: '' }
    ];

    return concat(
        display,
        overflow,
        position,
        positionSpacing,
        visibility,
        zIndex,
        flex,
        flexDirection,
        flexWrap,
        flexShrink,
        flexGrow,
        alignItems,
        alignContent,
        justifyContent,
        alignSelf,
        order,
        margin,
        padding,
        width,
        height,
        fontSize,
        fontWeight,
        lineHeight,
        textAlign,
        verticalAlign,
        whitespace,
        overflowWrap,
        wordBreak,
        color,
        backgroundAttachment,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        backgroundColor,
        borderWidth,
        borderColor,
        borderStyle,
        borderRadius,
        cursor,
        outline,
        resize,
        staticClasses
    );
}

function className(classPrefix, key, defaultPrefix) {
    if (key === 'default') {
        return classPrefix || defaultPrefix;
    }

    if (key === '-default') {
        return `${classPrefix}-default`;
    }

    if (!classPrefix) {
        return key;
    }

    return `${classPrefix}-${key}`;
}