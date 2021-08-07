<template>
    <div class="overflow-x-auto">
        <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div class="w-full lg:w-5/6">
              <div class="font-bold"> {{name}} </div>
              <div class="flex items-start justify-start">
                <router-link :to="{ name: createRouteName }" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {{ createButtonName ?? 'Crear' }}
                </router-link>
              </div>
              <div class="bg-white shadow-md rounded my-6">
                    <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th v-for="(column, index) in columns" :key="index" class="py-3 px-6 text-left">{{column.show}}</th>
                                <th class="py-3 px-6 text-left">Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">
                            <tr v-for="(item, index) in data" :key="index" class="border-b border-gray-200 hover:bg-gray-100">
                                <td v-for="(column, columnIndex) in columns" :key="columnIndex" class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <component :is="getComponent" :type="column.type" :value="item[columnIndex]" />
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <component :is="getComponent" :type="'action'" :value="item.id" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue';
import Column from '@/components/columns-components/Column.vue'

export default {
    name: 'CrudList',
    props: {
        name: String,
        getData: { type: Function, required: true},
        columns: Object,
        createRouteName: String,
        createButtonName: String
    },
    components: {
       Column 
    },
    setup(props) {
        const data  = ref([])
        const callFunction = async () => {
            data.value = await props.getData();
        };
        callFunction()
        return {
            data
        }

    },
    computed: {
        getComponent() {
            return "Column"
        }
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
a {
  color: #42b983;
}
</style>
