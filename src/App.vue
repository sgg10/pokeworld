<template>
  <div id="app">
    <LoadLayout>
      <BaseLoading />
    </LoadLayout>

    <MainLayout/>
  </div>
</template>

<script>
import LoadLayout from './layouts/LoadLayout'
import MainLayout from './layouts/MainLayout'
import BaseLoading from './components/BaseLoading'
export default {
  name: 'App',
  components: { MainLayout, LoadLayout, BaseLoading }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
