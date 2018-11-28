public class RemotingService {
  @RemoteAction
  public static Room__c[] getAllRooms(){
    return [SELECT Id, Name FROM Room__c];
  }
}