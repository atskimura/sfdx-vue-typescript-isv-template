<template>
  <div class="hello">
    <div v-for="room in rooms">
      <div><a :href="'/'+room.Id">{{ room.Name }}（定員: {{room.Capacity__c}}）</a></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import RoomsApi from '@/api/Rooms';

@Component
export default class Rooms extends Vue {
  public rooms: any[] = [];

  private mounted(): void {
    this.loadAllRooms();
  }

  private async loadAllRooms(): Promise<any> {
    this.rooms = await RoomsApi.getAllRooms();
  }
}
</script>