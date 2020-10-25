<template>
  <div>
    <AuthLayout>
      <h1>Register</h1>
      <Form />
    </AuthLayout>
  </div>
</template>

<script>
import Form from './Form'
import AuthLayout from '../../layouts/AuthLayout'
export default {
  name: 'Register',
  components: { AuthLayout, Form }
}
</script>
