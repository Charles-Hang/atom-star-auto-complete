import map from 'lodash/map';
import flatMap from 'lodash/flatMap';
import concat from 'lodash/concat';

type ResolvedConfig = import('./resolveConfig').ResolvedConfig;
type Classes = import('./generateClasses').Classes;

export default function(resolvedConfig: ResolvedConfig): Classes {
    const { style } = resolvedConfig;

    const display = map(style('display'), (value, key) => className('', key, 'display'));

    const overflow = flatMap(style('overflow'), (value, key) => [
        className('overflow', key, 'overflow'),
        className('overflow-x', key, 'overflow'),
        className('overflow-y', key, 'overflow'),
    ]);

    const position = map(style('position'), (value, key) => className('', key, 'position'));

    const positionSpacing = flatMap(style('positionSpacing'), (value, key) => [
        className('top', key, 'positionSpacing'),
        className('right', key, 'positionSpacing'),
        className('bottom', key, 'positionSpacing'),
        className('left', key, 'positionSpacing'),
    ]);

    const visibility = map(style('visibility'), (value, key) => className('', key, 'visibility'));

    const zIndex = map(style('zIndex'), (value, key) => className('z', key, 'zIndex'));

    const flex = map(style('flex'), (value, key) => className('flex', key, 'flex'));

    const flexDirection = map(style('flexDirection'), (value, key) => className('flex', key, 'flexDirection'));

    const flexWrap = map(style('flexWrap'), (value, key) => className('flex', key, 'flexWrap'));

    const flexShrink = map(style('flexShrink'), (value, key) => className('flex-shrink', key, 'flexShrink'));

    const flexGrow = map(style('flexGrow'), (value, key) => className('flex-grow', key, 'flexGrow'));

    const alignItems = map(style('alignItems'), (value, key) => className('items', key, 'alignItems'));

    const alignContent = map(style('alignContent'), (value, key) => className('content', key, 'alignContent'));

    const justifyContent = map(style('justifyContent'), (value, key) => className('justify', key, 'justifyContent'));

    const alignSelf = map(style('alignSelf'), (value, key) => className('self', key, 'alignSelf'));

    const order = map(style('order'), (value, key) => className('order', key, 'order'));

    const margin = flatMap(style('margin'), (value, key) => [
        className('m', key, 'margin'),
        className('mx', key, 'margin'),
        className('my', key, 'margin'),
        className('mt', key, 'margin'),
        className('mr', key, 'margin'),
        className('mb', key, 'margin'),
        className('ml', key, 'margin'),
    ]);

    const padding = flatMap(style('padding'), (value, key) => [
        className('p', key, 'padding'),
        className('px', key, 'padding'),
        className('py', key, 'padding'),
        className('pt', key, 'padding'),
        className('pr', key, 'padding'),
        className('pb', key, 'padding'),
        className('pl', key, 'padding'),
    ]);

    const width = map(style('width'), (value, key) => className('w', key, 'width'));

    const height = map(style('height'), (value, key) => className('h', key, 'height'));

    const fontSize = map(style('fontSize'), (value, key) => className('font', key, 'fontSize'));

    const fontWeight = map(style('fontWeight'), (value, key) => className('font', key, 'fontWeight'));

    const lineHeight = map(style('lineHeight'), (value, key) => className('leading', key, 'lineHeight'));

    const textAlign = map(style('textAlign'), (value, key) => className('text', key, 'textAlign'));

    const verticalAlign = map(style('verticalAlign'), (value, key) => className('align', key, 'verticalAlign'));

    const whitespace = map(style('whitespace'), (value, key) => className('whitespace', key, 'whitespace'));

    const overflowWrap = map(style('overflowWrap'), (value, key) => className('', key, 'overflowWrap'));

    const wordBreak = map(style('wordBreak'), (value, key) => className('', key, 'workBreak'));

    const color = map(style('color'), (value, key) => className('text', key, 'color'));

    const backgroundAttachment = map(style('backgroundAttachment'), (value, key) => className('bg', key, 'backgroundAttachment'));

    const backgroundPosition = map(style('backgroundPosition'), (value, key) => className('bg', key, 'backgroundPosition'));

    const backgroundRepeat = map(style('backgroundRepeat'), (value, key) => className('bg', key, 'backgroundRepeat'));

    const backgroundSize = map(style('backgroundSize'), (value, key) => className('bg', key, 'backgroundSize'));

    const backgroundColor = map(style('backgroundColor'), (value, key) => className('bg', key, 'backgroundColor'));

    const borderWidth = flatMap(style('borderWidth'), (value, key) => [
        className('border', key, 'borderWidth'),
        className('border-t', key, 'borderWidth'),
        className('border-r', key, 'borderWidth'),
        className('border-b', key, 'borderWidth'),
        className('border-l', key, 'borderWidth'),
    ]);

    const borderColor = map(style('borderColor'), (value, key) => className('border', key, 'borderColor'));

    const borderStyle = map(style('borderStyle'), (value, key) => className('border', key, 'borderStyle'));

    const borderRadius = map(style('borderRadius'), (value, key) => className('rounded', key, 'borderRadius'));

    const cursor = map(style('cursor'), (value, key) => className('cursor', key, 'cursor'));

    const outline = map(style('outline'), (value, key) => className('outline', key, 'outline'));

    const resize = map(style('resize'), (value, key) => className('resize', key, 'resize'));

    const staticClasses = ['truncate'];

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