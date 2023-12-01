import * as vscode from "vscode";
import { window, StatusBarAlignment } from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const myButton = window.createStatusBarItem(StatusBarAlignment.Left, 0);
  myButton.text = "$(digicre-logo) Click Here!";
  myButton.command = "my-extension.helloWorld";
  myButton.show();

  let disposable = vscode.commands.registerCommand(
    "my-extension.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello World from my-extension!");
    }
  );

  context.subscriptions.push(disposable);
}
export function deactivate() {}
