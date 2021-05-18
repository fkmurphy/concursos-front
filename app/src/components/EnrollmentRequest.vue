<template>
<form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="first-name">
        Nombre 
      </label>
      <input v-model="first_name" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" :class="first_name.length<=0 ? 'border-red-500' : 'border-500'" id="first-name" type="text" placeholder="Ingrese su nombre">
      <!-- p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="last-name">
        Apellido 
      </label>
      <input v-model="last_name" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" :class="last_name.length<=0 ? 'border-red-500' : 'border-500'" id="last-name" type="text" placeholder="Ingrese su apellido">
      <p v-if="last_name.length <= 0" class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="place_of_birth">
        Lugar de nacimiento 
      </label>
      <input v-model="place_of_birth" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" :class="place_of_birth.length<=0 ? 'border-red-500' : 'border-500'" id="place_of_birth" type="text" placeholder="Ingrese su apellido">
      <p v-if="last_name.length <= 0" class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="place_of_birth">
        Fecha de nacimiento 
      </label>
      <input v-model="date_of_birth" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="date_of_birth" type="date" placeholder="Ingrese su apellido">
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="place_of_birth">
        Número de Documento      
      </label>
      <input v-model="document_number" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="document_number" type="text" placeholder="Número de documento">
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="place_of_birth">
        CUIL/CUIT      
      </label>
      <input v-model="uid" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="uid" type="text" placeholder="Número de documento">
    </div>
    <!--<div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>-->
  </div>
  <div class="flex flex-wrap mb-2">
    <div class="w-full divide-y-600 mb-6">
        <p> Domicilio Real </p>
        <hr />
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="real_address_street">
        Calle 
      </label>
      <input v-model="real_address_street" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" :class="real_address_street.length<=0 ? 'border-red-500' : 'border-500'" id="real_address_street" type="text" placeholder="Calle">
      <!-- p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
    </div>
    <div>
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="real_address_number">
       Número 
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="real_address_number" type="text" placeholder="122">
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="real_address_city">
        Ciudad
      </label>
      <input v-model="real_address_city" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="real_address_city" type="text" placeholder="Viedma">
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="real_address_province">
       Provincia 
      </label>
      <div class="relative">
        <select v-model="real_address_province" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="real_address_province">
          <option value="1">Río Negro</option>
          <option>Buenos Aires</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="real_address_country">
        País 
      </label>
      <div class="relative">
        <select v-model="real_address_country" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="real_address_country">
          <option>Argentina</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <!--<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
    </div>-->
  </div>
  <div class="flex flex-wrap mb-2">
    <div class="w-full divide-y-600 mb-6">
        <p> Domicilio Legal </p>
        <hr />
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="legal_address_street">
        Calle 
      </label>
      <input v-model="legal_address_street" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" :class="legal_address_street.length<=0 ? 'border-red-500' : 'border-500'" id="legal_address_street" type="text" placeholder="Calle">
      <!-- p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
    </div>
    <div>
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="legal_address_number">
       Número 
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="legal_address_number" type="text" placeholder="122">
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="legal_address_city">
        Ciudad
      </label>
      <input v-model="legal_address_city" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="legal_address_city" type="text" placeholder="Viedma">
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="legal_address_province">
       Provincia 
      </label>
      <div class="relative">
        <select v-model="legal_address_province" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="legal_address_province">
          <option value="1">Río Negro</option>
          <option>Buenos Aires</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="legal_address_country">
        País 
      </label>
      <div class="relative">
        <select v-model="legal_address_country" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="legal_address_country">
          <option>Argentina</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <!--<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
    </div>-->
  </div>
</form>
</template>

<script>
export default {
    name: 'EnrrolmentRequest',
    data() {
        return {
            last_name: "",
            legal_address_number: "",
            legal_address_street: "",
            legal_address_province:"",
            legal_address_city: "",
            legal_address_country: "",
            real_address_number: "",
            real_address_street: "",
            real_address_province:"",
            real_address_city: "",
            real_address_country: "",
            place_of_birth: "",
            date_of_birth: "",
            first_name: "",
            uid:"",
            document_number:""
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
