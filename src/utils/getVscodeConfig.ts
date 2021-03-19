import { workspace } from 'vscode';

export default function getConfig() {
    const config = workspace.getConfiguration('atomstarcss');
    const configFilePath: string | undefined = config.get('config');
    const includes: string | undefined = config.get('includes');

    return { configFilePath, includes };
}
