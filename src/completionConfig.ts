const classRegex = /class=["|']([\w- ]*$)/;
const classNameRegex = /className=(?:"|'|{`(?:\$\{.*\}\s?)*|{.*['"])([\w- ]*$)/;
const composesRegex = /composes: ([\w- ]*$)/;
const applyRegex = /@apply ([\w- ]*$)/;

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

const completionConfig: Array<{
    extension: string;
    patterns: Array<{
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
            },
            {
                regex: applyRegex,
                splitChar: ' '
            }
        ]
    },
    {
        extension: 'scss',
        patterns: [
            {
                regex: applyRegex,
                splitChar: ' '
            }
        ]
    }
];

export default completionConfig;
