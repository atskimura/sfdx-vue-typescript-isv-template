/**
 * Salesforce JavaScript Remotingの型定義
 */
declare namespace Visualforce.remoting {
  export class Manager {
    static invokeAction(actionName:string, ...args:any): void;
  }
}