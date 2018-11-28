<template>
  <div class="home">
    <span id="logo"></span>
    <Rooms />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Rooms from '@/components/Rooms.vue';

@Component({
  components: {
    HelloWorld,
    Rooms,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
#logo {
  background-image: url(../assets/logo.png);
  width: 200px;
  height: 200px;
  display: inline-block;
}
</style>
