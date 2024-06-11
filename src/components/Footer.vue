<template>
    <footer>
      <div class="max-w-6xl mx-auto px-4 sm:px-6">

        <!-- Top area: Blocks -->
        <div class="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
            <!-- 2nd block -->
            <router-link to="/terminos-y-condiciones" class="sm:col-span-6 md:col-span-6 lg:col-span-6 flex justify-center items-center">
                <h6 class="text-gray-800 font-medium mb-2">Terminos y condiciones</h6>
            </router-link>

            <!-- 3rd block -->
            <router-link to="/contacto" class="sm:col-span-6 md:col-span-6 lg:col-span-6 flex justify-center items-center">
                <h6 class="text-gray-800 font-medium mb-2">Contacto</h6>
            </router-link>
        </div>

        <!-- Bottom area -->
        <div class="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

            <!-- Social links -->
            <ul class="flex mb-4 md:order-1 md:ml-4 md:mb-0 flex justify-center items-center">
                <li>
                  <router-link to="#" class="flex justify-center items-center rounded-full shadow" aria-label="Twitter">
                    <img :src="twitter_svg" alt="twitter-logo" class="w-8 h-8 fill-current">
                  </router-link>
                </li>
                <li class="ml-4">
                  <router-link to="#" class="flex justify-center items-center rounded-full shadow" aria-label="Facebook">
                    <img :src="meta_svg" alt="meta-logo" class="w-8 h-8 fill-current">
                  </router-link>
                </li>
            </ul>

            <!-- Copyrights note -->
            <div class="text-sm text-gray-600 mr-4 flex justify-center items-center"> 
                1auto.com.mx Todos los derechos reservados.
            </div>

        </div>

      </div>
    </footer>
</template>

<script>
    //Icons
    import meta_svg from '@/footer/meta.svg'
    import twitter_svg from '@/footer/twitter.svg'
    import tiktok_svg from '@/footer/tiktok.svg'

    export default {
        name: "Footer",
        setup() {
            return {
                meta_svg,
                twitter_svg,
                tiktok_svg
            }
        }
    }
</script>