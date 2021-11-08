<template>
<div class="container mx-auto p-6">
    <div class="flex flex-wrap justify-center items-stretch -mx-4">
      <div class="p-4" v-for="contest in contests" :key="contest.id">
        <div class="flex-none md:flex-1 bg-white rounded-lg mr-4 h-full">
          <div class="w-80 border-t-8 border-blue-600 rounded-lg">
            <div class="w-full justify-center">
              <h3 class="font-bold text-blue-700">{{contest.name}}</h3>
              <p class="w-36 md:w-auto py-4 text-sm text-gray-400 text-center">{{contest.resume.length > 0 ? contest.resume : "S/resumen"}}</p>
              <p class="py-4 text-sm text-gray-400">
                <span class="font-bold">Fin de inscripciones:</span> {{contest.enrollment_date_end}}
              </p>
            </div>
          </div>

          <div class="p-4 flex space-x-4">
              <a :href="`contest/${contest.code}`" class="w-1/2 px-4 py-3 text-center bg-gray-100 text-blue-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm">Ver más</a>
            <a :href="`postulate/${contest.code}`" class="w-1/2 px-4 py-3 text-center bg-blue-100 text-blue rounded-lg hover:bg-black-700 hover:text-white font-bold text-sm">Inscribirse</a>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import {getPublicContests} from '@/api/contests/getPublicContests';
import {onMounted, ref} from "vue";
import moment from 'moment';

export default {
  name: 'PublicationContestsList',
  props: {
  },
  setup() {
    let contests = ref([]);

    onMounted(async () => {
      contests.value = await getPublicContests().then((result) => {
        let dataResponse = result.data.data;
        dataResponse.map((row) => {
          const resumeLength = 80;
          row.resume = row.description.length > resumeLength ? row.description.slice(-resumeLength) : row.description;
          row.enrollment_date_end = moment(row.enrollment_date_end).format('D-MM-Y').toString();
          return row;
        });
        return dataResponse;
      });
    });

    return {
      contests
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
