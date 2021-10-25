<template>
  <div class="container mx-auto">
    <div class="flex justify-center px-6 my-12">
      <!-- Row -->
      <div class="w-full flex">
        <!-- Col -->
        <div class="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
          <h3 class="pt-4 text-2xl text-center">Perfil</h3>
          <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" @submit="submit">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="nationality">
                 Nacionalidad 
                </label>
                <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="nationality"
                    type="text"
                    placeholder="Nacionalidad"
                    v-model="nationality"
                />
                <span class="text-xs text-red-300">{{nationalityError}}</span>
              </div>
              <div class="w-full">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="phone">
                  Teléfono
                </label>
                <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="text"
                    placeholder="Teléfono"
                    v-model="phone"
                />
                <span class="text-xs text-red-300">{{phoneError}}</span>
              </div>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="dni">
                  DNI
                </label>
                <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="dni"
                      autocomplete="dni"
                      type="text"
                      placeholder="DNI"
                      v-model="dni"
                />
                <span class="text-xs text-red-300">{{dniError}}</span>
            </div>
            <div class="mb-4">
              <label class="block mb-2 text-sm font-bold text-gray-700" for="placeOfBirth">
                  Lugar de nacimiento
              </label>
                <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="placeOfBirth"
                      type="placeOfBirth"
                      placeholder="Lugar de nacimiento"
                      v-model="placeOfBirth"
                />
                <span class="text-xs text-red-300">{{placeOfBirthError}}</span>
            </div>
            <div class="w-full">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="birthDate">
                    Fecha de nacimiento
                </label>
                <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="birthDate"
                    type="text"
                    placeholder="23/10/1980"
                    v-model="birthDate"
                />
                <span class="text-xs text-red-300">{{birthDateError}}</span>
                <!--<p class="text-xs italic text-red-500">Contraseña inc....</p>-->
            </div>
            <div class="w-full md:flex">
                <input
                    class=""
                    id="article22"
                    type="checkbox"
                    v-model="article22"
                />
                <label class="block mb-2 text-sm font-bold text-gray-700" for="article22">
                   Articulo 22 (Res. CD CURZA N 112/1991): La presentación de la solicitud de inscripción importa, por parte del postulante, el conocimiento y la aceptanción de las condiciones fiadas en este reglamento.
                </label>
                <span class="text-xs text-red-300">{{article22Error}}</span>
                <!--<p class="text-xs italic text-red-500">Contraseña inc....</p>-->
            </div>
            <div class="mb-6 text-center">
              <button
                  class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
              >
               Confirmar
              </button>
              <span v-for="(error, index) in errors" :key="index">{{index}}: {{error}}</span>
            </div>
          </form>
            <hr class="mb-6 border-t" />
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
            },
            initialErrors: {
                //uidError: 'This email is already taken',
            },
        });

        const submit = handleSubmit(async (values, actions) => {
            personRegister(values).then( result => {
                console.log('result debug', result);
                actions.resetForm();
                let redirect = localStorage.getItem('postulateToContest');
                if (redirect) {
                    localStorage.setItem('redirect', JSON.stringify({name: "PostulateToContest", params: { contestCode : redirect }}));
                    localStorage.removeItem('postulateToContest');
                }
                router.push({ name: "Login" });
            }).catch( errors => {
                actions.setFieldError('cuil', 'Verifique si ya existe.')
                console.log('error debug', errors)
            });
        });

        const { 
            value: nationality,
            errorMessage: nationalityError
        } = useField('nationality');

        const { 
            value: birthDate, 
            errorMessage: birthDateError 
        } = useField('birth_date');

        const { 
            value: dni, 
            errorMessage: dniError 
        } = useField('dni');

        const {value: realAddress, errorMessage: realAddressError } = useField('real_address');
        const {value: legalAddress, errorMessage: legalAddressError } = useField('legal_address');
        const {value: phone, errorMessage: phoneError} =useField('phone');
        const {value: article22, errorMessage: article22Error} =useField('article');
        const {value: placeOfBirth, errorMessage: placeOfBirthError} =useField('place_of_birth');

        return {
            meta,
            submit,
            realAddress, realAddressError,
            legalAddress, legalAddressError,
            phone, phoneError,
            nationality, nationalityError,
            birthDate, birthDateError,
            placeOfBirth, placeOfBirthError,
            dni, dniError,
            article22, article22Error,
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
