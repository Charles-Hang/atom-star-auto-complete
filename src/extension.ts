// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { languages, Range, Position, CompletionItem, CompletionItemKind, ExtensionContext } from 'vscode';
import config from './config';
import classes from './classes';

const triggerCharacters = ['"', "'", ' ', '.'];

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
	let curExtension = '';

	config.forEach(({ extension, patterns }) => {
		curExtension = extension;

		patterns.forEach(({ regex, splitChar }) => {
			const disposable = languages.registerCompletionItemProvider(
				curExtension,
				{
					provideCompletionItems: (document, position) => {
						const range = new Range(new Position(position.line, 0), position);
						const textInCurrentLine = document.getText(range);
						const rawClasses = textInCurrentLine.match(regex);

						if (!rawClasses || rawClasses.length === 1) {
							return [];
						}

						const classesInCurrentLine = rawClasses[1].split(splitChar);
						const completionItems = classes.map(className => {
							return new CompletionItem(className, CompletionItemKind.Variable);
						});

						for (const classInCurrentLine of classesInCurrentLine) {
							for (let i = 0; i < completionItems.length; i++) {
								if (completionItems[i].label === classInCurrentLine) {
									completionItems.splice(i, 1);
								}
							}
						}

						return completionItems;
					}
				},
				...triggerCharacters
			);

			context.subscriptions.push(disposable);
		});
	});
}

// this method is called when your extension is deactivated
export function deactivate() {}
