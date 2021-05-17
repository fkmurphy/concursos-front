<template>
  <h4>Tailwind</h4>
  <ul class="divide-y divide-gray-200">
    <li v-for="(postulation, index) in data" :key="index" class="py-4 flex">
      <img class="h-10 w-10 rounded-full" :src="postulation.img" alt="" />
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">{{ postulation.title}}</p>
        <p class="text-sm text-gray-500">{{ postulation.type}}</p>
      </div>
    </li>
  </ul>
  <div class="postulations">
    <h4>{{ subtitle }}</h4>
    <h4>{{ data[0].title.toUpperCase() }} </h4>
    <div v-if="Object.keys(data).length > 0">
        <div class="postulation" v-for="(postulation, index) in data" :key="index">
            <p><small>Número #{{index + 1}}</small></p>
            <p :class="{available: postulation.active }">{{ 'Disponible ' + (postulation.active ? 'si' : 'no')}}</p>
            <p v-bind:value="postulation.type">X</p>
            <img v-bind:value="postulation.img" :alt="postulation.img_alt" />
        </div>
    </div>
    <div v-else>
        <p>No hay en lista. . </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostulationsList',
  props: {
    subtitle: String
  },
  data() {
      return {
        data: [
            {
                title: 'Posición para el cargo de...',
                type: 'lalala',
                active: false,
                img: '#',
                img_alt: 'Alt de la imagen'
            },
            {
                title: 'Posición para el cargo de ayudante ad.',
                type: 'pepe',
                active: true,
                img: '#',
                img_alt: 'Alt2 de la imagen'
            }
        ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p.available {
    color: green;
}
</style>
