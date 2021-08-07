<template>
  <CrudCreate name="Crear Concurso" :getData="dataFunction" :fields="columns" />
</template>

<script>
import CrudCreate from '@/components/CrudCreate.vue'
import {create} from '@/api/admin/crud/create.js'

export default {
  name: 'ContestCreate',
  components: {
    CrudCreate
  },
  setup() {
    const columns = {
      code: {
        type: "string",
        show: "Id"
      },
      name: {
        type: "string",
        show: "Nombre"
      },
    }

    const dataFunction = async (data) => {
      return create('contests', data).then((result) => {
        return result.data.data
      });
    };

    return {
      dataFunction,
      columns
    }
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
