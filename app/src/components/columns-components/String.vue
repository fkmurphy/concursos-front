<template>
    <span>{{value}}</span>
</template>

<script>

export default {
    name: 'String',
    props: {
        value: String
    },
    setup() { 
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
