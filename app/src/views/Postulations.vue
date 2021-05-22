<template>
  <h1>Postulations</h1>
  <PostulationsList />
</template>

<script>
import PostulationsList from '@/components/PostulationsList.vue'
import '@/api/index.js'

export default {
  name: 'App',
  components: {
    PostulationsList
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
