<template>
  <div>
    <AuthLayout>
      <h1>Login</h1>
      <Form />
    </AuthLayout>
  </div>
</template>

<script>
import Form from './Form'
import AuthLayout from '../../layouts/AuthLayout'
export default {
  name: 'Login',
  components: { AuthLayout, Form }
}
</script>
