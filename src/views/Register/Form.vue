<template>
  <div>
    <b-form @submit.prevent="register">
      <b-row>
        <b-col>
          <b-form-group label="Name:" label-for="txtName">
            <b-form-input type="text" placeholder="Name" class="input" id="txtName" required v-model="name"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
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
          <b-form-group label="Confirmar password:" label-for="password2">
            <b-form-input placeholder="Password" class="input" type="password" id="password2" required v-model="pass2"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button type="submit" class="button">Register</b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import { createNewPokeTrainer, getCurrentUser } from '../../backend/controllers/pokeTrainerController'
export default {
  name: 'FormRegister',
  data () {
    return {
      email: '',
      pass: '',
      pass2: '',
      name: ''
    }
  },
  methods: {
    async register () {
      if (this.pass === this.pass2) {
        await createNewPokeTrainer(this.email, this.pass, this.name)
        this.$router.push({ name: 'Home' })
      }
    }
  },
  created () {
    // eslint-disable-next-line no-unused-expressions
    getCurrentUser() ? this.$router.push({ name: 'Home' }) : null
  }
}
</script>
