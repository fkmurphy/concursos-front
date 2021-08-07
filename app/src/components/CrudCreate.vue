<template>
    <div class="overflow-x-auto">
        <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div class="w-full lg:w-5/6">
              <div class="flex bg-white shadow-md rounded my-6 justify-center">
                <div class="w-full  lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                  <!-- title -->
                  <h3 class="pt-4 text-2xl text-center">{{name}}!</h3>
                  <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                    <div class="mb-4 md:flex md:justify-between">
                      <td v-for="(column, columnIndex) in columns" :key="columnIndex" class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                          <component :is="getComponent" :type="column.type" :value="item[columnIndex]" />
                        </div>
                      </td>
                      <div class="mb-4 md:mr-2 md:mb-0">
                        <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                          First Name
                        </label>
                        <input
                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                        />
                      </div>
                      <div class="md:ml-2">
                        <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                          Last Name
                        </label>
                        <input
                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div class="mb-4">
                      <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                        Email
                      </label>
                      <input
                          class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="email"
                          type="email"
                          placeholder="Email"
                      />
                    </div>
                    <div class="mb-4 md:flex md:justify-between">
                      <div class="mb-4 md:mr-2 md:mb-0">
                        <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                          Password
                        </label>
                        <input
                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                        />
                        <p class="text-xs italic text-red-500">Please choose a password.</p>
                      </div>
                      <div class="md:ml-2">
                        <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                          Confirm Password
                        </label>
                        <input
                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="c_password"
                            type="password"
                            placeholder="******************"
                        />
                      </div>
                    </div>
                    <div class="mb-6 text-center">
                      <button
                          class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                          type="button"
                      >
                        Register Account
                      </button>
                    </div>
                    <hr class="mb-6 border-t" />
                    <div class="text-center">
                      <a
                          class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                          href="#"
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <div class="text-center">
                      <a
                          class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                          href="./index.html"
                      >
                        Already have an account? Login!
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue';

export default {
    name: 'CrudList',
    props: {
        name: String,
        getData: { type: Function, required: true},
        fields: Object
    },
    components: {
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
