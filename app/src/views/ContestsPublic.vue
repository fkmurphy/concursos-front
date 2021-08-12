<template>
  <div class="bg-gradient-to-b from-gray-50 to-gray-100 bg-gradient-to-b from-gray-100 to-blue-100 flex h-screen justify-center items-center">
    <div class="m-auto">
      <h1 class="mb-5  font-bold text-2xl">Publicaciones</h1>
      <PostulationsList />
    </div>
  </div>
</template>

<script>
import PublicationContestsList from '@/components/PublicationContestsList.vue'

export default {
  name: 'ContestsPublic',
  components: {
    PostulationsList: PublicationContestsList
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
