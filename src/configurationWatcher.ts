import { workspace, FileSystemWatcher } from 'vscode';
import getConfig from './utils/getVscodeConfig';
import generateClasses from './riacss/generateClasses';

export type Classes = Array<{ name: string; varients?: string[] }>;

let configClasses: Classes;
let includesClasses: Classes;
let configFileWatcher: FileSystemWatcher | null = null;

export default async function(callback: (classes: Classes) => void) {
    const { configFilename, includes } = getConfig();

    includesClasses = generateIncludesClasses(includes);
    configClasses = await generateClasses(configFilename) as any;
    callback(configClasses.concat(includesClasses));

    watchConfigFile((classes) => {
        configClasses = classes;
        callback(configClasses.concat(includesClasses));
    }, configFilename);

	workspace.onDidChangeConfiguration(async (e) => {
        const { configFilename, includes } = getConfig();

		if (e.affectsConfiguration('riacss.config')) {
            configClasses = await generateClasses(configFilename) as any;
            callback(configClasses.concat(includesClasses));

            configFileWatcher?.dispose();
            configFileWatcher = null;

            watchConfigFile((classes) => {
                configClasses = classes;
                callback(configClasses.concat(includesClasses));
            }, configFilename);
        }
        
        if (e.affectsConfiguration('riacss.includes')) {
            includesClasses = generateIncludesClasses(includes);
            callback(configClasses.concat(includesClasses));
        }
	})
}

function watchConfigFile(onClassesChange: (classes: Classes) => void, configFilename?: string) {
    if (!configFilename) {
        return;
    }

    configFileWatcher = workspace.createFileSystemWatcher(configFilename);

    configFileWatcher.onDidChange(async () => {
        const configClasses = await generateClasses(configFilename) as any;

        onClassesChange(configClasses);
    });

    configFileWatcher.onDidCreate(async () => {
        const configClasses = await generateClasses(configFilename) as any;

        onClassesChange(configClasses);
    });

    configFileWatcher.onDidDelete(async () => {
        const configClasses = await generateClasses(configFilename) as any;

        onClassesChange(configClasses);
    });
}

function generateIncludesClasses(includes?: string): Classes {
    if (!includes) {
        return [];
    }

    return includes.split(',').map(item => ({ name: item.trim() }));
}
