<template>
  <div class="overflow-x-auto">
    <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
      <div class="w-full lg:w-5/6">
        <div class="flex bg-white shadow-md rounded my-6 justify-center">
          <div class="w-full  lg:w-8/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <!-- title -->
            <h3 class="pt-4 text-2xl text-center">Inscripción para {{info.name}}</h3>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" @submit="onSubmit">
              <div class="mb-5 md:justify-between md:flex">
                <div class="mb-4 md:w-1/2 md:mr-2 md:mb-0">
                  <label class="block text-sm font-bold text-gray-700" for="category">Categoría</label>
                  <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="category"
                      disabled="disabled"
                      type="text"
                      name="category"
                      placeholder="Ingrese el nombre"
                      :value="info.category.name"
                  />
                </div>
                <div class="mb-4 md:w-1/2 md:mr-2 md:mb-0">
                  <label class="block text-sm font-bold text-gray-700" for="categoryType">Tipo</label>
                  <input
                      id="categoryType"
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      disabled="disabled"
                      type="text"
                      name="category_type"
                      placeholder="Ingrese el nombre"
                      :value="info.category_type.name"
                  />
                </div>
              </div>
              <div class="mb-5 md:flex md:justify-between">
                <div class="mb-4 md:w-1/2 md:mr-2 md:mb-0">
                  <label class="block text-sm font-bold text-gray-700" for="remunerationType">Remuneración</label>
                  <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="remunerationType"
                      disabled="disabled"
                      type="text"
                      name="remuneration_type"
                      placeholder="Ingrese el nombre"
                      :value="info.remuneration_type.name"
                  />
                </div>
                <div class="mb-4 md:w-1/2 md:mr-2 md:mb-0">
                  <label class="block text-sm font-bold text-gray-700" for="workingDayType">Jornada laboral</label>
                  <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="workingDayType"
                      disabled="disabled"
                      type="text"
                      name="working_day_type"
                      placeholder="Ingrese el nombre"
                      :value="info.working_day_type.name"
                  />
                </div>
              </div>
              <!-- button -->
              <div class="mb-6 text-center">
                <button
                    class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                  Guardar
                </button>
              </div>
              <hr class="mb-6 border-t" />
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import {create} from '@/api/admin/crud/create.js'
import {viewContest} from '@/api/contests/viewContest.js'
import {onBeforeMount, ref} from 'vue';
import { useRoute } from 'vue-router'

export default {
  name: 'PostulateForm',
  components: {
  },
  setup() {
        let info = ref();
        const route = useRoute();
        onBeforeMount( async () => {
            info.value = await viewContest(route.params.contestId).then( response => {
                return response.data.data
            }).catch( response => {
                console.log(response)
            })
            console.log(info)

        });
        return {
            info
        }
  },
  computed: {
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
