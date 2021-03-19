import getAtomstarcssConfig from '../utils/getAtomstarcssConfig';
import defaultConfig from './defaultConfig';
import resolveConfig from './resolveConfig';
import generateFromResolvedConfig from './generateFromResolvedConfig';

export type Classes = string[];

const defaultResolvedConfig = resolveConfig([defaultConfig]);

export default async function generateClasses(configFilePath?: string) {
    let atomstarcssConfig: any;

    if (configFilePath) {
        atomstarcssConfig = await getAtomstarcssConfig(configFilePath);
    }

    if (!atomstarcssConfig) {
        return generateFromResolvedConfig(defaultResolvedConfig);
    }

    return generateFromResolvedConfig(resolveConfig([defaultConfig, atomstarcssConfig]));
}
