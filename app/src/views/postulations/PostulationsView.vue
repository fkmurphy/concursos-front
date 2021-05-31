<template>
<div class="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
    <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div class="w-full max-w-6xl mx-auto">
            <div class="text-center max-w-xl mx-auto">
                <div class="text-center mb-10">
                    <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                </div>
                <h3 class="text-2xl font-bold mb-5 text-gray-600">{{postulation.data.title}}</h3>
                <h3 class="text-xl mb-5 font-light">Area: {{postulation.data.area}}.</h3>
                <h3 class="text-xl mb-5 font-light">
                    <span class="font-bold">Contacto</span><br/>
                    <span v-html="postulation.data.contact_data"></span>
                </h3>
            </div>
        </div>
        <div class="w-full max-w-6xl mx-auto">
            <div class="text-center max-w-xl mx-auto">
                <div class="text-center mb-10">
                    <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {viewPostulation} from '@/api/postulations/viewPostulation'
import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router'

export default {
    name: 'PostulationsView',
    setup() {
        //let postulation = reactive(null);
        let postulation = ref(null);
        const route = useRoute();
        const getData = viewPostulation(route.params.postulationId).then(response => {
            postulation.value  = response.data
        })
        onMounted(() => { 
            console.log('mounted'); 
            getData
        });
        return {
            postulation,
        }
    },

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
