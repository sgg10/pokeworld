import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/BootstrapVue'
import './plugins/fontAwesome'
import './backend'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
