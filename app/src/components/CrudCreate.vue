<template>
    <div class="overflow-x-auto">
        <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div class="w-full lg:w-5/6">
              <div class="flex bg-white shadow-md rounded my-6 justify-center">
                <div class="w-full  lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                  <!-- title -->
                  <h3 class="pt-4 text-2xl text-center">{{name}}!</h3>
                  <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                    <div v-for="(field, fieldIndex) in fields" :key="fieldIndex" class="mb-4 md:flex md:justify-between">
                      <div v-if="!field.hasOwnProperty('dependency')">
                        <Text v-if="field.type === 'string'" :name="field.name ?? fieldIndex" :type="field.type" :label="field.label" :placeholder="field.placeholder" :value="field.value"/>
                        <Select v-if="field.type === 'select'" :name="field.name ?? fieldIndex" :type="field.type" :label="field.label" :placeholder="field.placeholder" :value="field.value" :data="field.data" />
                      </div>
                    </div>
                    <div class="mb-6 text-center">
                      <button
                          class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                          type="button"
                      >
                       Guardar
                      </button>
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
import {ref} from 'vue';
import Text from "@/components/fields-components/Text";
import Select from "@/components/fields-components/Select";

export default {
    name: 'CrudList',
    props: {
        name: String,
        getData: { type: Function, required: true},
        fields: Object
    },
    components: {
      Text,
      Select
    },
    setup(props) {
        const dataResponse = ref([])
        const callFunction = async (data) => {
            dataResponse.value = await props.getData(data);
        };
        callFunction(dataResponse)
        return {
            dataResponse
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
