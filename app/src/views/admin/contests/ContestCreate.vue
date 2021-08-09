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
                      name="name"
                      v-model="name"
                      placeholder="Ingrese el nombre"
                  />
                  <span>{{nameError}}</span>
                </div>
                <div class="md:ml-2">
                  <label class="block text-sm font-bold text-gray-700" for="qty">
                    Cantidad de vacantes
                  </label>
                  <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="qty"
                      name="qty"
                      type="text"
                      v-model="qty"
                      placeholder="Ejemplo: 2"
                  />
                </div>
              </div>
              <div class="mb-4 md:flex md:justify-between">
                <div class="md:ml-2">
                  <label class="block text-sm font-bold text-gray-700" for="dateInit">
                    Fecha de inicio
                  </label>
                  <input
                      name="init_date"
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="dateInit"
                      type="date"
                      v-model="init_date"
                  />
                </div>
                <div class="md:ml-2">
                  <label class="block text-sm font-bold text-gray-700" for="dateEnd">
                    Fecha de fin
                  </label>
                  <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="dateEnd"
                      name="end_date"
                      type="date"
                      v-model="end_date"
                  />
                </div>
              </div>
              <div class="mb-12 md:justify-between">
                  <label class="block text-sm font-bold text-gray-700" for="dateEnrrolmentEnd">
                    Fecha de fin de inscripciones
                  </label>
                  <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="enrrolment_date_end"
                      id="dateEnrrolmentEnd"
                      type="date"
                      v-model="enrollment_date_end"
                  />
              </div>
              <div class="mb-4 md:flex md:justify-between">
                <div>
                  <label class="block text-sm font-bold text-gray-700" for="remunerationType">
                    Tipo de remuneración
                  </label>
                  <select
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline"
                      id="remunerationType"
                      name="remuneration_type_id"
                      v-model="remuneration_types"
                  >
                    <option v-for="(option, key) in lists.remuneration_types" :key="key" :value="key" >{{option}}</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-bold text-gray-700" for="workingDayTypes">
                    Tipo de jornada
                  </label>
                  <select
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline"
                      id="workingDayTypes"
                      name="working_day_type_id"
                      v-model="working_day_types"
                  >
                    <option v-for="(option, key) in lists.working_day_types" :key="key" :value="key">{{option}}</option>
                  </select>
                </div>
              </div>
              <div class="mb-4 md:flex md:justify-between">
                <div>
                  <label class="block text-sm font-bold text-gray-700" for="category">
                   Categoría
                  </label>
                  <select
                      name="category_id"
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline"
                      id="category"
                      v-model="categories"
                  >
                    <option v-for="(option, key) in lists.categories" :key="key" :value="key">{{option}}</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-bold text-gray-700" for="categoryType">
                    Tipo de categoría
                  </label>
                  <select
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline"
                      name="category_type_id"
                      id="categoryType"
                      v-model="category_types"
                  >
                    <option v-for="(option, key) in lists.category_types" :key="key" :value="key">{{option}}</option>
                  </select>
                </div>
              </div>
              <div class="mb-12 md:justify-between">
                <label class="block text-sm font-bold text-gray-700" for="departament">
                  Departamento
                </label>
                <select
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline"
                    name="departament_id"
                    id="departament"
                    v-model="departaments"
                    @change="getData('careers', 'careers/departament/' + departaments)"
                >
                  <option v-for="(option, key) in lists.departaments" :key="key" :value="key">{{option}}</option>
                </select>
              </div>
              <div class="mb-12 md:justify-between" v-show="departaments !== undefined" >
                <label class="block text-sm font-bold text-gray-700" for="career">
                  Carrera
                </label>
                <select
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline"
                    id="career"
                    name="career_id"
                    v-model="careers"
                    @change="getData('courses', 'courses/career/' + careers)"
                >
                  <option v-for="(option, key) in lists.careers" :key="key" :value="key">{{option}}</option>
                </select>
              </div>
              <div class="mb-12 md:justify-between" v-show="careers !== undefined">
                <label class="block text-sm font-bold text-gray-700" for="course">
                  Asignatura
                </label>
                <select
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline"
                    id="course"
                    name="course_id"
                    v-model="courses"
                >
                  <option v-for="(option, key) in lists.courses" :key="key" :value="key">{{option}}</option>
                </select>
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
import {onBeforeMount, ref} from 'vue';
import {schema as createValidation } from '@/schemas/contests/create.js';
import {useField, useForm} from 'vee-validate';

export default {
  name: 'ContestCreate',
  components: {
  },
  setup() {
    const {handleSubmit} = useForm({
      validationSchema: createValidation
    });
    const {value: name, errorMessage: nameError } = useField('name');
    const {value: qty, errorMessage: qtyError } = useField('qty');
    const {value: init_date, errorMessage: initDateError } = useField('init_date', undefined, {
      initialValue: undefined,
    });
    const {value: end_date, errorMessage: endDateError} = useField('end_date', undefined, {
      initialValue: undefined
    });
    const {value: enrollment_date_end, errorMessage: enrollmentDateEndError} =useField('enrollment_date_end');
    const {value:  categories, errorMessage: categoryError} =useField('category_id');
    const {value: category_types, errorMessage: categoryTypeError} =useField('category_type_id');
    const {value: working_day_types, errorMessage: workingDayTypeError} =useField('working_day_type_id');
    const {value: remuneration_types, errorMessage: remunerationTypeError} =useField('remuneration_type_id');

    const {value: departaments, errorMessage: departamentError} =useField('departament_id');
    const {value: careers, errorMessage: careerError} =useField('career_id');
    const {value: courses, errorMessage: courseError} =useField('course_id');
    const lists = ref({
      categories: undefined,
      remuneration_types: undefined,
      working_day_types: undefined,
      category_types: undefined,
      departaments: undefined,
      courses: undefined,
      careers: undefined
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

      lists.value.categories = await list('categories').then(result => {
        return  processResponse(result.data.data);
      });
      lists.value.category_types = await list('category-types').then(result => {
        return  processResponse(result.data.data);
      });
      lists.value.remuneration_types = await list('remuneration-types').then(result => {
        return processResponse(result.data.data);
      });
      lists.value.working_day_types= await list('working-day-types').then(result => {
        return processResponse(result.data.data);
      });
      lists.value.departaments = await list('departaments').then(result => {
        return processResponse(result.data.data);
      });
    });
    const getData = async (col, api) => {
      lists.value[col] = {};
      lists.value[col] = await list(api).then(result => {
        return processResponse(result.data.data);
      });
    }
    const onSubmit = handleSubmit((values)=> console.log('miraaa pappapapapaa', values));

    return {
      getData,
      onSubmit,
      lists,
      name, nameError, departaments, departamentError, qtyError,
      careers, careerError, courses, courseError, working_day_types, workingDayTypeError,
      qty, remuneration_types, remunerationTypeError, category_types, categoryTypeError,
      categories, categoryError, endDateError, end_date, init_date, initDateError, enrollment_date_end, enrollmentDateEndError
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
