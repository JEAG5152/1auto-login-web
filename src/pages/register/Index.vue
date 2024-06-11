<template>
    <section class="relative pt-32 pb-12 md:pt-40 md:pb-40 bg-slate-900 h-screen">

        <div class="relative max-w-4xl mx-auto px-4 sm:px-6 border-white border-solid">
            <div class="text-center text-white">
                <span class="h1">Creá una cuenta nueva</span>
            </div>
            <div class=" text-center max-w-sm mx-auto pt-24">
                <span class="text-red-light_red dark:text-rose-500 text-sm" v-if="errors_login.active && errors_login.default != null">*{{ errors_login.default }}*</span>
                <div class="text-white">
                    <!-- Email input -->
                    <span class="text-red-light_red dark:text-rose-500 text-sm" v-if="errors_login.active && errors_login.first_name != null">*{{ errors_login.first_name }}*</span>
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <input v-model="data_register.first_name"
                            type="text"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="input_first_name"
                            placeholder="Correo electrónico" />
                        <label
                            for="input_first_name"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                            Nombre(s)
                        </label>
                    </div>
                    <!-- Email input -->
                    <span class="text-red-light_red dark:text-rose-500 text-sm" v-if="errors_login.active && errors_login.last_name != null">*{{ errors_login.last_name }}*</span>
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <input v-model="data_register.last_name"
                            type="text"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="input_last_name"
                            placeholder="Correo electrónico" />
                        <label
                            for="input_last_name"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                            Apellido(s)
                        </label>
                    </div>
                    <!-- Email input -->
                    <span class="text-red-light_red dark:text-rose-500 text-sm" v-if="errors_login.active && errors_login.email != null">*{{ errors_login.email }}*</span>
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <input v-model="data_register.email"
                            type="text"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="input_email"
                            placeholder="Correo electrónico" />
                        <label
                            for="input_email"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                            Correo electrónico
                        </label>
                    </div>


                    <span class="text-red-light_red dark:text-rose-500 text-sm" v-if="errors_login.active && errors_login.cell_phone != null">*{{ errors_login.cell_phone }}*</span>
                    <div class="relative mb-6">
                        <vue-tel-input 
                            :preferredCountries="['MX', 'US']"
                            class="h-10 background-color-input" @validate="validateTelInput($event)"
                            :inputOptions="options_cell_input">
                        </vue-tel-input>
                    </div>

                     <!-- Password input -->
                    <span class="text-red-light_red dark:text-rose-500 text-sm" v-if="errors_login.active && errors_login.password != null">*{{ errors_login.password }}*</span>
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <input v-model="data_register.password"
                            type="password"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="input_password"
                            placeholder="Contraseña" />
                        <label
                          for="input_password"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                          Contraseña
                        </label>
                    </div>

                    <!-- Submit button -->
                    <button @click="loginAction()"
                        class="inline-block bg-red-light_red px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-dark_red hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-light_red focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-light_red active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] rounded-full shadow m-2"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Registrar
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {
        Input,
        Ripple,
        initTE,
    } from "tw-elements";
    import { onMounted, onUpdated, reactive, getCurrentInstance } from "vue";
    // Pinia
    import { storeToRefs } from 'pinia'
    import { useGlobalStore } from '#/stores/globalStore.js'
    import { useSessionStore } from '#/stores/modules/session.js'
    // Services
    import { validateObjectParameter } from '#/services/validateObjectParameters.js'
    import keysParameters from './keysParameters.js'
    /* Router */
    import { useRouter, useRoute } from 'vue-router'
    import { decrypt64 } from "#/libs/base64.js"

    export default {
        name: 'login',
        setup() {
            /* Context Vue */
            const app = getCurrentInstance()
             /* Router */
            const router = useRouter()
            const route = useRoute()
            /* Store Pinia */
            const globalStore = useGlobalStore()
            const sessionStore = useSessionStore()
            /* Actions */
            const { setLoading } = globalStore
            const { register, googleLogin } = sessionStore

            /* Initial values */
            const objectRegister = {
                first_name: "",
                last_name: "",
                second_name: null,
                password: "",
                email: "",
                cell_phone: ""
            }
            const objectErrors = {
                active: false,
                first_name: null,
                last_name: null,
                second_name: null,
                password: null,
                email: null,
                cell_phone: null,
                default: null
            }

            /* Variables */
            const data_register = reactive({...objectRegister})
            const errors_login = reactive({...objectErrors})
            const options_cell_input = reactive({
                placeholder: 'Numero de telefono'
            })

            /* Functions */
            const validateTelInput = (event) => {
                data_register.cell_phone = event.valid ? event.number : null
            }

            const loginAction = async () => {
                /* Reset sate errors */
                if(errors_login.active) {
                    Object.assign(errors_login, objectErrors)
                }

                /* Active Loading */
                setLoading(true)

                /* Validations */
                const validate_data = await validateObjectParameter(keysParameters, data_register)

                const { success, data, errors } = validate_data

                if (!success) {
                    for(let index in errors) {
                        const key = errors[index]
                        
                        if(key.error.indexOf('empty') > -1) {
                            errors_login.active = true
                            errors_login[key.name] = 'Este campo es obligatorio'
                        }
                        else if(key.error.indexOf('invalid') > -1) {
                            errors_login.active = true
                            errors_login[key.name] = 'El valor ingresado es invalido'
                        }
                    }

                    /* Disaled loading */
                    setLoading(false)
                    return
                }

                register(
                    app,
                    data_register
                ).then(response => {
                    if(!response.success) {
                        if(response.errors && response.errors.length > 0) {
                            let error = false
                            for (let key of response.errors) {
                                if(key.code === "error_customer_already_exists") {
                                    error = true
                                    errors_login.default = 'Ya existe una cuenta registrada con los datos ingresados'
                                }
                                else {
                                    error = true
                                    errors_login.default = 'Se produjo un error 32158 por favor intenta nuevamente'
                                }
                                
                            }

                            if (error) {
                                errors_login.active = error
                                /* Disaled loading */
                                setLoading(false)
                                return
                            }
                        }
                    }
                    else if(response.success) {
                        /* Disaled loading */
                        setLoading(false)
                        /* Redirect to home */
                        router.push({ path: '/', query: {
                                register: true
                            } 
                        })
                    }
                })
            }

            const loginGoogle = async() => {
                /* Reset sate errors */
                if(errors_login.active) {
                    Object.assign(errors_login, objectErrors)
                }

                googleLogin(app).then(response => {
                    // console.log(response)
                    // if(!response.success) {
                    //     if(response.errors && response.errors.length > 0) {
                    //         let error = false
                    //         for (let key of response.errors) {
                    //             if(key.code === "error_customer_not_found") {
                    //                 error = true
                    //                 errors_login.email = 'El correo ingresado no se encuentra registrado'
                    //             }
                    //             if(key.code === "error_invalid_password") {
                    //                 error = true
                    //                 errors_login.password = 'La contraseña ingresada es incorrecta'    
                    //             }
                    //         }

                    //         if (error) {
                    //             errors_login.active = error
                    //             /* Disaled loading */
                    //             setLoading(false)
                    //             return
                    //         }
                    //     }
                    // }
                    // else if(response.success) {
                    //     /* Disaled loading */
                    //     setLoading(false)
                    //     /* Redirect to home */
                    //     router.push('/')
                    // }
                })
            }

            /* Lifecycle */
            onUpdated(() => {
                initTE({ Ripple, Input },{ allowReinits: true })
            })

            onMounted(() => {
                initTE({ Ripple, Input },{ allowReinits: true })

                if('session' in route.query) {
                    let session = JSON.parse(decrypt64(route.query.session))
                    session = JSON.parse(session)

                    // /* Set Session */
                    // setSession(session)
                    /* Disaled loading */
                    setLoading(false)
                    /* Redirect to home */
                    router.push({ path: '/', query: {
                            register: true
                        } 
                    })
                }
                else {
                    /* Disaled loading */
                    setLoading(false)
                }

                /* Disaled loading */
                setLoading(false)
            })

            return {
                /* Variables */
                data_register,
                errors_login,
                options_cell_input,
                /* Functions */
                loginAction,
                validateTelInput,
                loginGoogle
            }
        }
    }
</script>

<style>
    .vue-tel-input input {
        background: bottom;
    }
    .vue-tel-input ul {
        color: black;
    }
</style>