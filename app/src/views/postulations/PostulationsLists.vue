<template>
  <div class="bg-gradient-to-b from-gray-50 to-gray-100 flex justify-center items-center">
      <h1>Postulations</h1>
  </div>
  <PostulationsList />
</template>

<script>
import PostulationsList from '@/components/postulations/PostulationsList.vue'
import '@/api/index.js'

export default {
  name: 'PostulationsLists',
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
