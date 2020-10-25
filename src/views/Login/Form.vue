<template>
  <div>
    <b-form @submit.prevent="login">
      <b-row>
        <b-col>
          <b-form-group label="Email:" label-for="txtEmail">
            <b-form-input type="email" placeholder="Email" class="input" id="txtEmail" required v-model="email"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="Password:" label-for="password">
            <b-form-input placeholder="Password" class="input" type="password" id="password" required v-model="pass"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button type="submit" class="button">Sign In</b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import { login, getCurrentUser } from '../../backend/controllers/pokeTrainerController'
export default {
  name: 'FormLogin',
  data () {
    return {
      email: '',
      pass: ''
    }
  },
  methods: {
    async login () {
      try {
        await login(this.email, this.pass)
        this.$router.push({ name: 'Home' })
      } catch (error) {
        console.log(error)
      }
    }
  },
  created () {
    // eslint-disable-next-line no-unused-expressions
    getCurrentUser() ? this.$router.push({ name: 'Home' }) : null
  }
}
</script>
