<template>
    <span :class="'bg-' + color + '-200 text-' + color + '-600'" class=" py-1 px-3 rounded-full text-xs">{{ value }}</span>
</template>

<script>

export default {
    name: 'Status',
    props: {
        value: String,
        color: String
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
