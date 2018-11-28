export default {
  getAllRooms(): Promise<any> {
    if (process.env.NODE_ENV === 'production') {
      return new Promise<any>((resolve) => {
        window.Visualforce.remoting.Manager.invokeAction(
          'RemotingService.getAllRooms',
          (result: any[], event: any) => {
            resolve(result);
          },
        );
      });
    } else {
      return Promise.resolve([
        { Id: '#', Name: 'ローカル会議室A' },
        { Id: '#', Name: 'ローカル会議室B' },
        { Id: '#', Name: 'ローカル会議室C' },
      ]);
    }
  },
};
