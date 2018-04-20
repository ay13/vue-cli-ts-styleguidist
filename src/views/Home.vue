<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <app-button color="orange">This is a button</app-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import AppButton from '@/components/AppButton.vue';

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
    AppButton,
  },
});
</script>
