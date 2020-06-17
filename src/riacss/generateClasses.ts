import getRiacssConfig from '../utils/getRiacssConfig';
import defaultConfig from './defaultConfig';
import resolveConfig from './resolveConfig';
import generateFromResolvedConfig from './generateFromResolvedConfig';

export type Classes = Array<{ name: string; variants?: string }>;

const defaultResolvedConfig = resolveConfig([defaultConfig]);

export default async function generateClasses(configFilePath?: string) {
    let riacssConfig: any;

    if (configFilePath) {
        riacssConfig = await getRiacssConfig(configFilePath);
    }

    if (!riacssConfig) {
        return generateFromResolvedConfig(defaultResolvedConfig);
    }

    return generateFromResolvedConfig(resolveConfig([defaultConfig, riacssConfig]));
}
