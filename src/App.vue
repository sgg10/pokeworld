<template>
  <div id="app">
    <LoadLayout v-if="isLoading">
      <BaseLoading />
    </LoadLayout>

    <MainLayout v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LoadLayout from './layouts/LoadLayout'
import MainLayout from './layouts/MainLayout.vue'
import BaseLoading from './components/BaseLoading'
export default {
  name: 'App',
  components: { MainLayout, LoadLayout, BaseLoading },
  computed: {
    ...mapState('loading', { isLoading: 'isLoading' })
  }
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
