<template>
  <div>
    <Header />
    <div class="container">
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/'
import Footer from '@/components/Footer/'
export default {
  name: 'MainLayout',
  components: { Header, Footer }
}
</script>
