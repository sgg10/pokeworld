<template>
  <div id="app">
    <MainLayout/>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue'
export default {
  name: 'App',
  components: { MainLayout }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(247, 245, 245);
  background: #15202b;
}
</style>
