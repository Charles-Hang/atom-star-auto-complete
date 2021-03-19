import { workspace } from 'vscode';
import unit8ArrayToString from './unit8AarryToString';
import requireFromString from './requireFromString';

export default async function(filePath: string) {
    try {
        const fileResults = await workspace.findFiles(filePath, '**/node_modules/**', 1);

        if (!fileResults?.length) {
            return;
        }

        const fileUri = fileResults[0];
        const unit8Array = await workspace.fs.readFile(fileUri);
        const configString = unit8ArrayToString(unit8Array);
        const config = requireFromString(configString, fileUri.fsPath);

        return config;
    } catch (error) {
        console.log('获取atomstarcss配置错误', error);
    }
}
