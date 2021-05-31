<template>
    <!--<div v-for="(postulation, index) in postulations" :key="index">
        <hr/>
        <p>Title {{postulation.title}}</p>
        <p>Area {{postulation.area}}</p>
        <p>Orientación {{postulation.orientation}}</p>
        <p>Departament {{postulation.departament}}</p>
        <p>Requerimientos {{postulation.requirements}}</p>
        <p>Position {{postulation.position_category}}</p>
        <hr />
    </div>-->
    <div class="min-h-screen bg-gradient-to-b from-gray-100 to-blue-100 flex justify-center items-center">
      <div class="bg-white rounded-lg mr-4" v-for="postulation in postulations" :key="postulation.id">
        <div class="w-96 border-t-8 border-blue-600 rounded-lg flex">
          <!-- <div class="w-1/3 pt-6 flex justify-center">
          </div>-->
          <div class="w-full">
              <h3 class="font-bold text-blue-700">{{postulation.title}}</h3>
              <p class="py-4 text-sm text-gray-400">{{postulation.area}}</p>
          </div>
        </div>

        <div class="p-4 flex space-x-4">

            <router-link 
                class="w-1/2 px-4 py-3 text-center bg-gray-100 text-blue-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm" 
                :to="{ name: 'postulationView', params:{ postulationId: postulation.id }}" aria-current="page"> Ver más
            </router-link>
            <router-link 
                class="w-1/2 px-4 py-3 text-center bg-blue-100 text-blue rounded-lg hover:bg-black-700 hover:text-white font-bold text-sm" 
                to="postulations/XX/enrollment">Inscribirse</router-link>
        </div>
      </div>
    </div>
  <!--<ul class="divide-y divide-gray-200">
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
  </div>-->
</template>

<script>
import {getPostulations} from '@/api/postulations/getPostulations'
export default {
    name: 'PostulationsList',
    props: {
    },
    data() {
        return {
            postulations: []
        }
    },
    methods: {
        async getPostulationsData() {
            let {
                data
            } = await getPostulations()
            console.log(data.data)
            this.postulations = data.data
        }
    },
    created() {
        this.getPostulationsData()
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
p.available {
    color: green;
}
</style>
