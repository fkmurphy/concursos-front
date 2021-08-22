<template>
  <div class="overflow-x-auto">
    <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
      <div class="w-full lg:w-5/6">
        <div class="flex bg-white shadow-md rounded my-6 justify-center">
          <div class="w-full  lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <!-- title -->
            <h3 class="pt-4 text-2xl text-center">Crear concurso</h3>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" @submit="onSubmit">
              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label class="block text-sm font-bold text-gray-700" for="nameField">Nombre</label>
                  <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="nameField"
                      type="text"
                      name="first_name"
                      v-model="first_name"
                      placeholder="Ingrese el nombre"
                  />
                  <span class="text-xs text-red-300">{{firstNameError}}</span>
                </div>
                <div class="md:ml-2">
                  <label class="block text-sm font-bold text-gray-700" for="qty">
                   Apellido 
                  </label>
                  <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="last_name"
                      type="text"
                      v-model="last_name"
                      placeholder="Ejemplo: 2"
                  />
                  <span class="text-xs text-red-300">{{lastNameError}}</span>
                </div>
              </div>
              <div class="mb-4 md:flex md:justify-between">
                <div class="md:ml-2">
                  <label class="block text-sm font-bold text-gray-700" for="cuil">
                     CUIL 
                  </label>
                  <input
                      name="cuil"
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="cuil"
                      type="text"
                      v-model="cuil"
                  />
                  <span class="text-xs text-red-300">{{cuilError}}</span>
                </div>
                <div class="md:ml-2">
                  <label class="block text-sm font-bold text-gray-700" for="dni">
                    DNI
                  </label>
                  <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="dni"
                      name="dni"
                      type="text"
                      v-model="dni"
                  />
                  <span class="text-xs text-red-300">{{dniError}}</span>
                </div>
              </div>
              <div class="mb-6 md:justify-between">
                <div class="md:ml-2">
                  <label class="block text-sm font-bold text-gray-700" for="legal_address">
                     Dirección Legal 
                  </label>
                  <input
                      name="legal_address"
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="legal_address"
                      type="text"
                      v-model="legal_address"
                  />
                  <span class="text-xs text-red-300">{{legalAddressError}}</span>
                </div>
              </div>
              <div class="mb-6 md:justify-between">
                <div class="md:ml-2">
                  <label class="block text-sm font-bold text-gray-700" for="real_address">
                    Dirección Real
                  </label>
                  <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="real_address"
                      name="real_address"
                      type="text"
                      v-model="real_address"
                  />
                  <span class="text-xs text-red-300">{{realAddressError}}</span>
                </div>
              </div>
              <div class="mb-4 md:flex md:justify-between">
                <div class="md:ml-2">
                  <label class="block text-sm font-bold text-gray-700" for="date_of_birth">
                     Fecha de nacimiento
                  </label>
                  <input
                      name="date_of_birth"
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="date_of_birth"
                      type="date"
                      v-model="date_of_birth"
                  />
                  <span class="text-xs text-red-300">{{dateOfBirthError}}</span>
                </div>
                <div class="md:ml-2">
                  <label class="block text-sm font-bold text-gray-700" for="place_of_birth">
                    Lugar de nacimiento
                  </label>
                  <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="place_of_birth"
                      name="place_of_birth"
                      type="text"
                      v-model="place_of_birth"
                  />
                  <span class="text-xs text-red-300">{{placeOfBirthError}}</span>
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
import {list} from '@/api/admin/crud/list.js'
import {personRegister} from '@/api/personRegister.js'
import {onBeforeMount, ref} from 'vue';
import {schema as postulateFormValidation } from '@/schemas/postulations/postulateForm.js';
import {useField, useForm} from 'vee-validate';
//import { useRoute } from 'vue-router'

export default {
  name: 'PostulateForm',
  components: {
  },
  setup() {
    //const route = useRoute();
    //console.log('route', route.params.contestId)
    const {handleSubmit} = useForm({
      validationSchema: postulateFormValidation
    });
    const {value: first_name, errorMessage: firstNameError } = useField('first_name');
    const {value: last_name, errorMessage: lastNameError } = useField('last_name');
    const {value: contact_email, errorMessage: contactEmailError} =useField('contact_email');
    const {value: cellphone, errorMessage: cellphoneError} =useField('cellphone');
    const {value: phone, errorMessage: phoneError} =useField('phone');
    const {value: citizenship, errorMessage: citizenshipError} =useField('citizenship');
    const {value: real_address, errorMessage: realAddressError} =useField('real_address');
    const {value: legal_address, errorMessage: legalAddressError} =useField('legal_address');
    const {value: date_of_birth, errorMessage: dateOfBirthError} =useField('date_of_birth');
    const {value: place_of_birth, errorMessage: placeOfBirthError} =useField('place_of_birth');
    const {value: cuil, errorMessage: cuilError} =useField('cuil');
    const {value: dni, errorMessage: dniError} =useField('dni');

    const lists = ref({
      countries: undefined
    });
    const processResponse = response => {
      let map = {};
      response.forEach(category => {
        map[category.code] = category.name;
      });
      return map;
    }
    //'course_id',
        //'area_id',
        //'orientation_id',
    onBeforeMount(async () => {
      //lists.value.countries = await list('countries').then(result => {
      //  return  processResponse(result.data.data);
      //});
    });
    const getData = async (col, api) => {
      lists.value[col] = {};
      lists.value[col] = await list(api).then(result => {
        return processResponse(result.data.data);
      });
    }
    const onSubmit = handleSubmit((values, form) => {
      console.log('submit');
      personRegister(values).then( result=>{
          console.log(result);
        form.resetForm();
      }).catch(reject => {
        console.error(reject)
      });

    });

    return {
      getData,
      onSubmit,
      lists,
      first_name, last_name, firstNameError, lastNameError, contact_email,
      contactEmailError, cellphone, cellphoneError, phone, phoneError,
      citizenship, citizenshipError, real_address, realAddressError, legal_address,
      legalAddressError, date_of_birth, dateOfBirthError, place_of_birth, placeOfBirthError, cuil, cuilError,
        dni, dniError
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
