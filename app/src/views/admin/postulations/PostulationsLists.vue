<template>
  <CrudList name="Postulaciones" data="" />
</template>

<script>
import CrudList from '@/components/CrudList.vue'
import '@/api/index.js'

export default {
  name: 'App',
  components: {
      CrudList
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
