import { workspace } from 'vscode';
import unit8ArrayToString from './unit8AarryToString';
import requireFromString from './requireFromString';

export default async function(filename: string) {
    try {
        const fileResults = await workspace.findFiles(filename, '**/node_modules/**', 1);
        const fileUri = fileResults[0];
        console.log(fileUri, 'fileUri')
        if (fileUri) {
            console.log(fileUri.fsPath, 'fsPath')
        }
        const unit8Array = await workspace.fs.readFile(fileUri);
        const configString = unit8ArrayToString(unit8Array);
        const config = requireFromString(configString, fileUri.fsPath);

        return config;
    } catch (error) {
        console.log('获取riacss配置错误', error);
    }
}
