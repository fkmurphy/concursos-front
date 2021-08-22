<template>
  <div class="container mx-auto">
    <div class="flex justify-center px-6 my-12">
      <!-- Row -->
      <div class="w-full xl:w-3/4 lg:w-11/12 flex">
        <!-- Col -->
        <div
            class="w-full h-auto hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style="background-image: url('https://apps.curza.uncoma.edu.ar/curza_logo.png'); background-size: contain; background-repeat: no-repeat; background-position: center;"
        ></div>
        <!-- Col -->
        <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h3 class="pt-4 text-2xl text-center">Registrarse</h3>
          <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" @submit="submit">
            <div class="mb-4 md:flex md:justify-between">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                  Nombre
                </label>
                <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="Nombre"
                    v-model="firstName"
                />
                <span class="text-xs text-red-300">{{firstNameError}}</span>
              </div>
              <div class="md:ml-2">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                 Apellido
                </label>
                <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Apellido"
                    v-model="lastName"
                />
                <span class="text-xs text-red-300">{{lastNameError}}</span>
              </div>
            </div>
            <div class="mb-4">
              <label class="block mb-2 text-sm font-bold text-gray-700" for="cuil">
                CUIL
              </label>
              <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="cuil"
                    autocomplete="username"
                    type="text"
                    placeholder="CUIL"
                    v-model="cuil"
              />
                <span class="text-xs text-red-300">{{cuilError}}</span>
            </div>
            <div class="mb-4">
              <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                Email
              </label>
                <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      autocomplete="email"
                      type="email"
                      placeholder="Email"
                      v-model="contactEmail"
                />
                <span class="text-xs text-red-300">{{contactEmailError}}</span>
            </div>
            <div class="mb-4 md:flex md:justify-between">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                  Contraseña
                </label>
                <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    v-model="password"
                    autocomplete="new-password"
                />
                <span class="text-xs text-red-300">{{passwordError}}</span>
                <!--<p class="text-xs italic text-red-500">Contraseña inc....</p>-->
              </div>
              <div class="md:ml-2">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                 Confirmar contraseña
                </label>
                <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="c_password"
                    type="password"
                    placeholder="******************"
                    v-model="passwordConfirm"
                    autocomplete="new-password"
                    name="passwordConfirm"
                />
                <span class="text-xs text-red-300">{{passwordConfirmError}}</span>
              </div>
            </div>
            <div class="mb-6 text-center">
              <button
                  class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
              >
               Registrar
              </button>
              <span>{{errors}}</span>
            </div>
          </form>
            <hr class="mb-6 border-t" />
            <div class="text-center">
              <a
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
              >
                Perdió la contraseña?
              </a>
            </div>
            <div class="text-center">
              <a
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./login"
              >
                Ya tiene una cuenta? Loguear!
              </a>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useForm, useField } from 'vee-validate';
import { useRouter } from 'vue-router';
import { personRegister } from '@/api/personRegister.js'
import { schema } from '@/schemas/users/register.js'

export default {
    setup() {
        const router = useRouter();

        //const schema = {
        //    uid(value) {
        //        if (value === undefined || value.length === 0) {
        //            return "Ingrese el usuario";
        //        }

        //        if (typeof value !== "string") {
        //            return "Ingrese su usario"
        //        }
        //        return true;
        //    },
        //    password(value) {
        //        if (value === undefined || value.length === 0) {
        //            return "Ingrese la clave";
        //        }
        //        return true;
        //    }
        //};

        const { meta, handleSubmit, errors } = useForm({
            validationSchema: schema,
            initialValues: {
                cuil: "",
                password:"",
            },
            initialErrors: {
                //uidError: 'This email is already taken',
                passwordError: 'The password is too short',
            },
        });

        const submit = handleSubmit(async (values, actions) => {
            personRegister(values).then( result => {
                console.log(result);
                actions.resetForm();
                let redirect = localStorage.getItem('postulateToContest');
                if (redirect) {
                    localStorage.setItem('redirect', JSON.stringify({name: "PostulateToContest", params: { contestId : redirect }}));
                    localStorage.removeItem('postulateToContest');
                }
                router.push({ name: "Login" });
            }).catch( result => {
                actions.setFieldError('cuil', 'Verifique si ya existe.')
                console.log(errors)
                console.log('ERRRORRORORRORORORORORROROROR', result.message)
            });
        });

        const { 
            value: password, 
            errorMessage: passwordError 
        } = useField('password');

        const { 
            value: passwordConfirm, 
            errorMessage: passwordConfirmError 
        } = useField('passwordConfirm');

        const {value: firstName, errorMessage: firstNameError } = useField('first_name');
        const {value: lastName, errorMessage: lastNameError } = useField('last_name');
        const {value: contactEmail, errorMessage: contactEmailError} =useField('contact_email');
        const {value: cuil, errorMessage: cuilError} =useField('cuil');

        return {
            meta,
            submit,
            password,
            passwordError,
            passwordConfirm,
            passwordConfirmError,
            firstName,
            firstNameError,
            lastName,
            lastNameError,
            cuil, cuilError,
            contactEmail,
            contactEmailError,
            errors
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
