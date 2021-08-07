<template>
  <CrudList name="Concursos" :getData="dataFunction" :columns="columns" :createButtonName="'Crear'" :createRouteName="'adminContestCreate'" />
</template>

<script>
import CrudList from '@/components/CrudList.vue'
import {list} from '@/api/admin/crud/list.js'

export default {
  name: 'ContestsList',
  components: {
    CrudList
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

    const dataFunction = async () => {
      return list('contests').then((result) => {
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
