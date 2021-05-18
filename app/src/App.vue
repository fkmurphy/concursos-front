<template>
    <Navbar />
    <div></div>
    <EnrollmentRequest />
</template>

<script>
import Navbar from './components/Navbar.vue'
import EnrollmentRequest from './components/EnrollmentRequest.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    EnrollmentRequest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
