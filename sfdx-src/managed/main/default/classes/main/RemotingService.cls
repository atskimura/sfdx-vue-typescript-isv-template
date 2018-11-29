public class RemotingService {
  @RemoteAction
  public static Room__c[] getAllRooms(){
    return [SELECT Id, Name, Capacity__c FROM Room__c];
  }
}