<template>
  <div class="rooms">
    <table class="slds-table slds-table_cell-buffer slds-table_bordered">
      <thead>
        <tr class="slds-line-height_reset">
          <th class="slds-text-title_caps" scope="col">
            <div class="slds-truncate" title="会議室名">会議室名</div>
          </th>
          <th class="slds-text-title_caps" scope="col">
            <div class="slds-truncate" title="定員">定員</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="slds-hint-parent" v-for="room in rooms" :key="room.Id">
          <th data-label="Opportunity Name" scope="row">
            <div class="slds-truncate" :title="room.Name"><a :href="'/'+room.Id">{{ room.Name }}</a></div>
          </th>
          <td data-label="Account Name">
            <div class="slds-truncate" :title="room.Capacity__c">{{room.Capacity__c}}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import RoomsApi from '@/api/Rooms';

@Component
export default class Rooms extends Vue {
  private rooms: any[] = [];

  private mounted(): void {
    this.loadAllRooms();
  }

  private async loadAllRooms(): Promise<any> {
    this.rooms = await RoomsApi.getAllRooms();
  }
}
</script>