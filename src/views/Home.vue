<template>
  <div class="home">
    <Rooms />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Rooms from '@/components/Rooms.vue';

@Component({
  components: {
    Rooms,
  },
})
export default class Home extends Vue {}
</script>
