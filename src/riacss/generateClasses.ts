import getRiacssConfig from '../utils/getRiacssConfig';
import defaultConfig from './defaultConfig';

export default async function generateClasses(configFilename?: string) {
    let riacssConfig: any;

    if (configFilename) {
        riacssConfig = await getRiacssConfig(configFilename);
    }

    if (!riacssConfig) {
        riacssConfig = defaultConfig;
    }

    // ...

    return [];
}
