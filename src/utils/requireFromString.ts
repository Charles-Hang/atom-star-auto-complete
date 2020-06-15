const path = require('path')

export default function requireFromString(string: string, filename: string) {
    const Module: any = module.constructor
    const paths = Module._nodeModulePaths(path.dirname(filename))
    const newModule = new Module(filename, module.parent)

    newModule.filename = filename;
    newModule.paths = paths;
    newModule._compile(string, filename);

    return newModule.exports
}
