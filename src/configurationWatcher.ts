import { workspace, FileSystemWatcher } from 'vscode';
import getConfig from './utils/getVscodeConfig';
import generateClasses, { Classes } from './riacss/generateClasses';

let configClasses: Classes;
let includesClasses: Classes;
let configFileWatcher: FileSystemWatcher | null = null;

export default async function(callback: (classes: Classes) => void) {
    const { configFilePath, includes } = getConfig();

    includesClasses = generateIncludesClasses(includes);
    configClasses = await generateClasses(configFilePath);
    callback(configClasses.concat(includesClasses));

    watchConfigFile((classes) => {
        configClasses = classes;
        callback(configClasses.concat(includesClasses));
    }, configFilePath);

	workspace.onDidChangeConfiguration(async (e) => {
        const { configFilePath, includes } = getConfig();

		if (e.affectsConfiguration('riacss.config')) {
            configClasses = await generateClasses(configFilePath);
            callback(configClasses.concat(includesClasses));

            configFileWatcher?.dispose();
            configFileWatcher = null;

            watchConfigFile((classes) => {
                configClasses = classes;
                callback(configClasses.concat(includesClasses));
            }, configFilePath);
        }
        
        if (e.affectsConfiguration('riacss.includes')) {
            includesClasses = generateIncludesClasses(includes);
            callback(configClasses.concat(includesClasses));
        }
	});
}

// configFilePath最好以**/开头，否则似乎无法正确监听？
function watchConfigFile(onClassesChange: (classes: Classes) => void, configFilePath?: string) {
    if (!configFilePath) {
        return;
    }

    configFileWatcher = workspace.createFileSystemWatcher(configFilePath, false, false, false);

    configFileWatcher.onDidChange(async () => {
        const configClasses = await generateClasses(configFilePath);
        onClassesChange(configClasses);
    });

    configFileWatcher.onDidCreate(async () => {
        const configClasses = await generateClasses(configFilePath);
        onClassesChange(configClasses);
    });

    configFileWatcher.onDidDelete(async () => {
        const configClasses = await generateClasses(configFilePath);
        onClassesChange(configClasses);
    });
}

function generateIncludesClasses(includes?: string): Classes {
    if (!includes) {
        return [];
    }

    return includes.split(',').map(item => ({ name: item.trim() }));
}
