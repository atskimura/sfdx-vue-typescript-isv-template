@isTest
class RemotingServiceTest {
  @isTest
  private static void tesGetAllRooms() {
    insert new Room__c(Name='Room1', Capacity__c=4);
    Room__c[] rooms = RemotingService.getAllRooms();
    System.assertEquals(1, rooms.size());
    System.assertEquals('Room1', rooms[0].Name);
    System.assertEquals(4, rooms[0].Capacity__c);
  }
}