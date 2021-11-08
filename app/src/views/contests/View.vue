<template>
<div v-if="contest" class="flex flex-wrap">
    <div class="w-full justify-center">
        <h3 class="font-bold text-blue-700">{{contest.name}}</h3>
        <p class="w-36 md:w-auto py-4 text-sm text-gray-400 text-center">
            <span class="font-bold">Asignatura:</span>
            <!-- TODO error data format {{ contest.course.nombre}}-->
        </p>
        <p class="py-4 text-sm text-gray-400">
            <span class="font-bold">Remuneración:</span> {{contest.remuneration_type.name}}
        </p>
        <p class="py-4 text-sm text-gray-400">
            <span class="font-bold">Carga:</span> {{contest.working_day_type.name}}
        </p>
        <p class="py-4 text-sm text-gray-400">
            <span class="font-bold">Vacantes:</span> {{contest.qty}}
        </p>
        <p class="py-4 text-sm text-gray-400">
            <span class="font-bold">Inicio de inscripciones:</span> {{contest.init_date}}
        </p>
        <p class="py-4 text-sm text-gray-400">
            <span class="font-bold">Fin de inscripciones:</span> {{contest.enrollment_date_end}}
        </p>
        <div class="p-4 space-x-4">
            <a 
                :href="`postulate/${contest}`" 
                class="w-1/2 px-4 py-3 text-center bg-blue-100 text-blue rounded-lg hover:bg-black-700 hover:text-white font-bold text-sm">
                Inscribirse
            </a>
        </div>
    </div>
</div>
<div v-else>
    No hay nada...
</div>
</template>

<script>
import {viewContest} from '@/api/contests/viewContest';
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router'

export default {
    name: 'ViewContest',
    props: {
    },
    setup() {
        let contest = ref(null);
        const route = useRoute();
        onMounted(async () => {
          contest.value = await viewContest(route.params.contestCode).then((result) => {
            return result.data.data;
          }).catch(e => {

              console.log("error get contest", e);
          });
        });

        console.log("the contest is ", contest)
        return {
          contest
        };
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
