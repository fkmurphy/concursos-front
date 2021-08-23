<template>
  <div class="overflow-x-auto">
    <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
      <div class="w-full lg:w-5/6">
        <div class="flex bg-white shadow-md rounded my-6 justify-center">
          <div class="w-full  lg:w-8/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <!-- title -->
            <h3 class="pt-4 text-2xl text-center">Inscripción para {{name}}</h3>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" @submit="acceptPostulation">
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
                      :value="category"
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
                      :value="category_type"
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
                      :value="remuneration_type"
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
                      :value="working_day_type"
                  />
                </div>
              </div>
              <!-- button -->
              <div class="mb-6 text-center">
                <button
                    class="w-full px-4 py-2 font-bold text-white rounded-full focus:outline-none focus:shadow-outline"
                    :class="submitAvailable ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 hover:bg-gray-700'"
                    :disabled="!submitAvailable"
                    type="submit"
                >
                    Acepto postularme para este cargo
                </button>
                <span>{{ errors.apiError ?? errors.general ?? ""  }}</span>
                <span>{{ messageSuccess  }}</span>
              </div>
              <hr class="mb-6 border-t" />
            </form>
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
import { useForm } from 'vee-validate';
import {postulate} from '@/api/postulations/postulate.js'

export default {
  name: 'PostulateForm',
  components: {
  },
  setup() {
        let name = ref('');
        let category = ref('');
        let category_type = ref('');
        let working_day_type = ref('');
        let remuneration_type = ref('');
        let messageSuccess = ref('');
        let submitAvailable = ref(true);

        const route = useRoute();
        onBeforeMount( async () => {
            let response = await viewContest(route.params.contestCode).then( response => {
                return response.data.data
            }).catch( response => {
                console.log("RespuestA ", response)
                return {};
            })
            name.value = response?.name
            category.value = response?.category?.name
            category_type.value = response?.category_type?.name
            working_day_type.value = response?.working_day_type?.name
            remuneration_type.value = response?.remuneration_type?.name
        });

        const { handleSubmit, errors } = useForm();

        const acceptPostulation = handleSubmit(async (values, actions) => {
            submitAvailable.value = false;
            postulate(route.params.contestCode).then(response => {
                let confirm = response.data;

                console.log("success",confirm);
                if (confirm?.status === true) {
                    messageSuccess.value = confirm?.message
                } else {
                    actions.setErrors({"general" : "Se produjo un error, contactese con el administrador de la plataforma"})
                    submitAvailable.value = true;

                }
            }).catch(error => {
                let apiError = error.response?.data

                console.log('error api', apiError?.message)
                if (apiError) {
                    actions.setErrors({"apiError": apiError.message});
                } else {
                    actions.setErrors({"general": "No se pudo determinar el error"});
                }
            });
        });

        return {
            name, category, category_type, working_day_type, remuneration_type,
            errors, acceptPostulation, messageSuccess, submitAvailable
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
