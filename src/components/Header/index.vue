<template>
  <div>
    <b-navbar toggleable="lg" type="dark">
      <b-img style="cursor: pointer;" @click="$router.push({ name: 'Home' })" :src="require('@/assets/img/logo.png')" width="50"></b-img>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="user">
            <template #button-content>
              <b-avatar></b-avatar>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <div v-else>
            <b-button variant="success" @click="$router.push({ name: 'Login' })" class="mx-2">Login</b-button>
            <b-button variant="success" @click="$router.push({ name: 'Register' })" class="mx-2">Register</b-button>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from 'firebase'
import { logout } from '../../backend/controllers/pokeTrainerController'
export default {
  name: 'Header',
  data () {
    return {
      user: null
    }
  },
  methods: {
    async logout () {
      logout()
      this.$router.push({ name: 'Home' })
    }
  },
  created () {
    // eslint-disable-next-line no-return-assign
    firebase.auth().onAuthStateChanged(u => this.user = u || null)
  }
}
</script>
