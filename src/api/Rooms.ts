import config from '@/config';

export default {
  getAllRooms(): Promise<any> {
    if (process.env.NODE_ENV === 'production') {
      return new Promise<any>((resolve) => {
        // namepsaceを設定した場合は要修正
        window.Visualforce.remoting.Manager.invokeAction(
          `${config.$namespace}.RemotingService.getAllRooms`,
          (result: any[], event: any) => {
            resolve(result.map((record) => this.stripNamespace(record)));
          },
        );
      });
    } else {
      return Promise.resolve([
        { Id: '1', Name: 'ローカル会議室A', Capacity__c: 4 },
        { Id: '2', Name: 'ローカル会議室B', Capacity__c: 5 },
        { Id: '3', Name: 'ローカル会議室C', Capacity__c: 6 },
      ]);
    }
  },
  stripNamespace(record: any): any {
    const newRecord: {[s: string]: any} = {};
    for (const [name, value] of Object.entries(record)) {
      const match = name.match(/^[\w\d]+__([\w\d]+__c)/);
      if (match) {
        newRecord[match[1]] = value;
      } else {
        newRecord[name] = value;
      }
    }
    return newRecord;
  },
};