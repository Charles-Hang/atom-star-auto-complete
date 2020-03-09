const classRegex = /class=["|']([\w- ]*$)/;
const classNameRegex = /className=["|']([\w- ]*$)/;
const extendRegex = /@extend ([\w-.]*$)/;
const composesRegex = /composes: ([\w- ]*$)/;

const jsPatterns = [
    {
        regex: classRegex,
        splitChar: ' '
    },
    {
        regex: classNameRegex,
        splitChar: ' '
    }
];

const config: Array<{
    extension: string;
    patterns: Array<{
        prefix?: string;
        regex: RegExp;
        splitChar: string;
    }>
}> = [
    {
        extension: 'javascript',
        patterns: jsPatterns
    },
    {
        extension: 'javascriptreact',
        patterns: jsPatterns
    },
    {
        extension: 'typescript',
        patterns: jsPatterns
    },
    {
        extension: 'typescriptreact',
        patterns: jsPatterns
    },
    {
        extension: 'html',
        patterns: [
            {
                regex: classRegex,
                splitChar: ' '
            }
        ]
    },
    {
        extension: 'css',
        patterns: [
            {
                regex: composesRegex,
                splitChar: ' '
            }
        ]
    },
    {
        extension: 'scss',
        patterns: [
            {
                prefix: '.',
                regex: extendRegex,
                splitChar: ' '
            }
        ]
    }
];

export default config;
