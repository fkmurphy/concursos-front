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
          <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
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
                />
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
                  Contraseña
                </label>
                <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                />
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
                />
              </div>
            </div>
            <div class="mb-6 text-center">
              <button
                  class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
              >
               Registrar
              </button>
            </div>
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
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useForm, useField } from 'vee-validate';
import { login } from '@/api/auth/login.js'
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const schema = {
            uid(value) {
                if (value === undefined || value.length === 0) {
                    return "Ingrese el usuario";
                }

                if (typeof value !== "string") {
                    return "Ingrese su usario"
                }
                return true;
            },
            password(value) {
                if (value === undefined || value.length === 0) {
                    return "Ingrese la clave";
                }
                return true;
            }
        };

        const { meta, handleSubmit, errors } = useForm({
            validationSchema: schema,
            initialValues: {
                uid: "",
                password:"",
            },
            initialErrors: {
                uidError: 'This email is already taken',
                passwordError: 'The password is too short',
            },
        });

        const submit = handleSubmit(async (values, actions) => {
            login(values).then((response) => {
                console.log(response)
                localStorage.token = response.data.access_token;
                router.push({ name: "Home" });
            }, () => {
                //actions.setFieldError('result', "EROR");
                actions.setErrors({
                    result: "El usuario o clave no es válida."
                })
            });
        });

        const {
            value: uid, 
            errorMessage: uidError
        } = useField('uid');
        
        const { 
            value: password, 
            errorMessage: passwordError 
        } = useField('password');

        /*async (dataForm) => {
            login(dataForm).then((response) => {
                console.log(response)
                localStorage.token = response.data.access_token;
                this.$router.push({ name: "Home" });
            });
        }*/

        return {
            meta,
            submit,
            uid,
            uidError,
            password,
            passwordError,
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
