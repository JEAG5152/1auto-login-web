<template>
  <header class="fixed w-full z-30 md:bg-black transition duration-300 ease-in-out" :class="{ 'bg-black backdrop-blur-sm shadow-lg': !options.top }">
    <div class="max-w-7xl w-full mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="shrink-0 mr-4 mt-2">
          <!-- Logo -->
          <router-link to="/" class="block" aria-label="Cruip">
            <img src="@/logo/ROJO.png" width="100">
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { onMounted, onBeforeUnmount, reactive, ref, computed } from "vue";
// Pinia
import { storeToRefs } from 'pinia'
import { useSessionStore } from '#/stores/modules/session.js'
/* Router */
import { useRouter, useRoute } from 'vue-router'

export default {
    name: 'Header',
    setup() {
        /* Store Pinia */
        const sessionStore = useSessionStore()
        /* Getters */
        const { getSession, getSessionActive } = storeToRefs(sessionStore)
        /* Router */
        const router = useRouter()
        const route = useRoute()

        /* Initial values */
        const initalState = {
            mobileNavOpen: false,
            top: true
        }

        /* Variables */
        const options = ref({...initalState})
        const mobileNav = ref(null)
        const hamburger = ref(null)

        /* Functions */
        const clickOutside = (e) =>  {
          if(mobileNav.value != null && mobileNav.value.contains(e.target)) {
              options.value.mobileNavOpen = false  
          }
          else if(!options.value.mobileNavOpen && hamburger.value != null && hamburger.value.contains(e.target)) {
              options.value.mobileNavOpen = false
          }

          // if (!options.value.mobileNavOpen || mobileNav.value.contains(e.target) || hamburger.value.contains(e.target)) return
          //   // if (!options.value.mobileNavOpen) return
          //   options.value.mobileNavOpen = false
        }
        const keyPress = () =>  {
            if (!options.value.mobileNavOpen || event.keyCode !== 27) return
            options.value.mobileNavOpen = false
        }
        const handleScroll = () => {
            options.value.top = window.pageYOffset > 10 ? false : true
        }

        onMounted(() => {
            document.addEventListener('click', clickOutside)    
            document.addEventListener('keydown', keyPress)
            document.addEventListener('scroll', handleScroll)
        })

        onBeforeUnmount(() => {
            document.removeEventListener('click', clickOutside)
            document.removeEventListener('keydown', keyPress)
            document.removeEventListener('scroll', handleScroll)
        })

        return {
            /* Variables */
            options,
            mobileNav,
            hamburger,
            /* Functions */
            clickOutside,
            keyPress,
            handleScroll
        }
    }
}
</script>