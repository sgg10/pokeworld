import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/pokemon/:id', name: 'Pokemon' },
  { path: '/login', name: 'Login' },
  { path: '/register', name: 'Register' },
  { path: '*', redirect: { name: 'Home' } }
]

const routes = routerOptions.map(r => ({
  ...r,
  component: () => import(/* webpackChunkName: "[request]" */`@/views/${r.name}/`)
}))

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
