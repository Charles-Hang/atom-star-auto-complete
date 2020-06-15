import { workspace } from 'vscode';

export default function getConfig() {
    const config = workspace.getConfiguration('riacss');
    const configFilename: string | undefined = config.get('config');
    const includes: string | undefined = config.get('includes');

    return { configFilename, includes };
}
