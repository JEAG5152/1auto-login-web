<template>
    <section class="relative pt-32 pb-12 md:pt-40 md:pb-40 bg-slate-900 h-screen">

        <div class="relative max-w-4xl mx-auto px-4 sm:px-6 border-white border-solid" v-if="!register_apply">
            <div class="text-center text-black font-semibold text-xl text-white">
    			<span class="h1">Creá una cuenta nueva</span>
    		</div>
    		<div class="flex items-center justify-center pt-16">
    			<img src="@/logo/ROJO.png" width="200">
    		</div>
    		<div class="text-center font-light text-white pt-16">
    			<button
                    @click="loginMeta()"
				  	type="button"
				  	class="inline-block rounded-full bg-slate-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
				  	<span class="text-xl">REGISTRATE CON FACEBOOK</span>
				</button>
    		</div>

    		<div class="text-center font-light text-white pt-16">
    			<button
    				@click="loginGoogle()"
				  	type="button"
				  	class="inline-block rounded-full bg-slate-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
				  	<span class="text-xl">REGISTRATE CON GOOGLE</span>
				</button>
    		</div>

    		<div class="text-center font-light text-white pt-16">
    			<button
    				@click="redirect('/registrate')"
				  	type="button"
				  	class="inline-block rounded-full bg-slate-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
				  	<span class="text-xl">REGISTRATE CON EMAIL</span>
				</button>
    		</div>
    	</div>
    		
    	<div class="relative max-w-4xl mx-auto px-4 sm:px-6 border-white border-solid" v-else>
            <div class="text-center text-black font-semibold text-4xl text-white mt-56">
    			<span class="h1">¡Gracias por tu registro!</span>
    		</div>
    	</div>
        
	</section>
</template>

<script>
	/* Router */
    import { useRouter, useRoute } from 'vue-router'
    import { onMounted, ref, getCurrentInstance } from "vue";

    // Pinia
    import { storeToRefs } from 'pinia'
    import { useGlobalStore } from '#/stores/globalStore.js'
    import { useSessionStore } from '#/stores/modules/session.js'

    import { decrypt64 } from "#/libs/base64.js"

	export default {
		setup() {
			/* Router */
            const router = useRouter()
            const route = useRoute()

            /* Context Vue */
            const app = getCurrentInstance()

            /* Store Pinia */
            const globalStore = useGlobalStore()
            const sessionStore = useSessionStore()
            /* Actions */
            const { setLoading } = globalStore
            const { register, googleLogin, metaLogin } = sessionStore

            const register_apply = ref(false)

            const redirect = (phat) => {
            	/* Redirect to home */
                router.push(phat)
            }

            const loginGoogle = async() => {
                // /* Reset sate errors */
                // if(errors_login.active) {
                //     Object.assign(errors_login, objectErrors)
                // }

                googleLogin(app).then(response => {
                	/* Code */
                })
            }

            const loginMeta = async() => {

                metaLogin(app).then(response => {
                    /* Code */
                })
            }

            onMounted(() => {
            	const { register } = route.query

            	if (register != undefined && register) {
            		register_apply.value = true
            	}
            })

			return {
				register_apply,
				redirect,
				loginGoogle,
                loginMeta
			}
		}
	}
</script>