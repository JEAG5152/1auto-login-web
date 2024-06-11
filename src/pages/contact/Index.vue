<template>
    <!-- Page content -->
    <main class="grow">
        <section class="relative pt-32 pb-12 md:pt-40 md:pb-20">
            <div class="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)] top-20" aria-hidden="true"></div>
            <div class="relative max-w-3xl mx-auto px-4 sm:px-6 border-white border-solid">
                <div class="text-center pb-12">
                    <p class="w-full text-white text-3xl">¿Necesitas ayuda?</p>
                    <p class="w-full text-white text-2xl">¡Contáctanos!</p>
                </div>

                <div class="text-white">
                    <!--Name input-->
                    <span class="text-red-light_red dark:text-rose-500 text-sm" v-if="errors_contact.active && errors_contact.name != null">*{{ errors_contact.name }}*</span>
                    <div class="relative mb-6" data-te-input-wrapper-init>
                      <input v-model="data_contact.name"
                        type="text"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput7"
                        placeholder="Name" />
                      <label
                        for="exampleInput7"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Nombre
                      </label>
                    </div>

                    <!--Email input-->
                    <span class="text-red-light_red dark:text-rose-500 text-sm" v-if="errors_contact.active && errors_contact.email != null">*{{ errors_contact.email }}*</span>
                    <div class="relative mb-6" data-te-input-wrapper-init>
                      <input v-model="data_contact.email"
                        type="email"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput8"
                        placeholder="Email address" />
                      <label
                        for="exampleInput8"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Correo Electrónico
                      </label>
                    </div>

                    <!--Message textarea-->
                    <span class="text-red-light_red dark:text-rose-500 text-sm" v-if="errors_contact.active && errors_contact.message != null">*{{ errors_contact.message }}*</span>
                    <div class="relative mb-6" data-te-input-wrapper-init>
                      <textarea v-model="data_contact.message"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlTextarea13"
                        rows="3"
                        placeholder="Message"></textarea>
                      <label
                        for="exampleFormControlTextarea13"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Mensaje
                      </label>
                    </div>
                    
                    <div class="text-center">
                        <!--Submit button-->
                        <button @click="contactAction()"
                          type="submit"
                          class="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block sm:w-1/2 w-full rounded bg-red-light_red px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-dark_red hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-dark_red focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-dark_red active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                          data-te-ripple-init
                          data-te-ripple-color="light">
                          Enviar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import {
        Ripple,
        Input,
        initTE,
    } from "tw-elements";
    import { onMounted, onUpdated, reactive } from "vue";
    // Pinia
    import { useGlobalStore } from '#/stores/globalStore.js'
    // Services
    import { validateObjectParameter } from '#/services/validateObjectParameters.js'
    import keysParameters from './keysParameters.js'

    export default {
        name: 'Contact',
        setup() {
            /* Store Pinia */
            const globalStore = useGlobalStore()
            /* Actions */
            const { setLoading } = globalStore

             /* Initial values */
            const objectContact = {
                name: null,
                email: null,
                message: null
            }
            const objectErrors = {
                active: false,
                name: null,
                email: null,
                message: null
            }

             /* Variables */
            const data_contact = reactive({...objectContact})
            const errors_contact = reactive({...objectErrors})

            /* Functions */
            const contactAction = async () => {
                /* Reset sate errors */
                if(errors_contact.active) {
                    Object.assign(errors_contact, objectErrors)
                }

                /* Validations */
                const validate_data = await validateObjectParameter(keysParameters, data_contact)
                
                const { success, data, errors } = validate_data

                if (!success) {
                    for(let index in errors) {
                        const key = errors[index]
                        
                        if(key.error.indexOf('empty') > -1) {
                            errors_contact.active = true
                            errors_contact[key.name] = 'Este campo es obligatorio'
                        }
                        else if(key.error.indexOf('invalid') > -1) {
                            errors_contact.active = true
                            errors_contact[key.name] = 'El valor ingresado es invalido'
                        }
                    }
                    return
                }

                
                /* Active Loading */
                setLoading(true)
                
                /* Disabled loading */
                setTimeout(()=>{
                    setLoading(false)                  
                }, 2000)
            }

            onMounted(() => {
                initTE({ Ripple, Input },{ allowReinits: true })
            })

            onUpdated(() => {
                initTE({ Ripple, Input },{ allowReinits: true })
            })

            return {
                /* Variables */
                data_contact,
                errors_contact,
                /* Functions */
                contactAction
            }
        }
    }
</script>