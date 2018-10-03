<template>
  <div id="app">
    <img alt="Orca logo" src="https://orcaalliance.eu/build/assets/img/logo.svg">
    <main-page />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Main from "./pages/Main/index.vue";

@Component({
  components: {
    "main-page": Main
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
