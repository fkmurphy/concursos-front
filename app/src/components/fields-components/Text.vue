<template>
  <div>
    <label class="block text-sm font-bold text-gray-700" :for="name">
     {{label.charAt(0).toUpperCase() + label.slice(1)}}
    </label>
    <input
        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        :id="name"
        type="text"
        :value="value"
        :placeholder="placeholder ?? label"
    />
  </div>
</template>

<script>
export default {
  name: 'Text',
  props: {
    label: String,
    name: String,
    value: String,
    placeholder: String
  },
  components: {
  },
  setup() {
  },
  computed: {
    defineComponent()
        {
            if (this.type === "action") {
                return "Actions"
            }
            if (this.type === "status") {
                return "Status"
            }
            return "ColumnString"
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
