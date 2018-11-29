export default {
  getAllRooms(): Promise<any> {
    if (process.env.NODE_ENV === 'production') {
      return new Promise<any>((resolve) => {
        // namepsaceを設定した場合は要修正
        window.Visualforce.remoting.Manager.invokeAction(
          'RemotingService.getAllRooms',
          (result: any[], event: any) => {
            resolve(result);
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
};
