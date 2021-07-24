<template>
    <component :is="defineComponent" :value="value" />
</template>

<script>
import ColumnString from '@/components/columns-components/String.vue'
import Actions from '@/components/columns-components/Actions.vue'
import Status from '@/components/columns-components/Status.vue'

export default {
    name: 'Column',
    props: {
        type: String,
        value: String
    },
    components: {
        ColumnString,
        Actions,
        Status
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
