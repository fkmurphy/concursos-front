<template>
    <div class="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center">
        <div  class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">   
            <h1 class="font-bold">Inicie sesión</h1>
            <form class="mt-8 space-y-6" @submit="submit">
                <div class="relative form-group">
                    <div class="absolute right-0 mt-4"><svg xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
                    </div>
                    <label for="user" class="text-sm font-bold text-gray-600 tracking-wide">Usuario</label>
                    <input
                        name="uid"
                        type="string"
                        class="form-control w-full text-base oy-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                        placeholder="Usuario (P.e. 2045678910)"
                        v-model="uid"
                    />
                    <span class="text-red-500">{{ uidError }}</span>
                </div>
                <div class="form-group">
                    <label for="password" class="text-sm font-bold text-gray-600 tracking-wide">Contraseña</label>
                    <input
                        v-model="password"
                        name="password"
                        type="password"
                        class="form-control w-full text-base oy-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                        placeholder="Contraseña"
                    />
                </div>
                <button 
                    type="submit"
                    :disabled="!meta.dirty" 
                    :class="[ !meta.dirty ? 'bg-gray-500 hover:bg-gray-600' : 'bg-indigo-500 hover:bg-indigo-600']"
                    class="w-full flex justify-center  text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline  shadow-lg cursor-pointer transition ease-in duration-300">Iniciar </button>
                <p class="text-red-500">{{ errors.result }}</p>
            </form>
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
