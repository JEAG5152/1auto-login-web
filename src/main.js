import { createApp } from 'vue'
import '#/css/style.css'
import App from './App.vue'

/* Pinia */
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

/* Init Pinia */
const pinia = createPinia()

/* Vue3 tel input */
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

/* Router Vue */
import router from '#/router/router'

/* Get Configs */
import ConfigGlobal from './1auto.config.js'

/* Init Vue */
const app = createApp(App)

/* Import Libraries */
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(VueTelInput)
app.config.globalProperties.$config_global = ConfigGlobal

/* Start app */
app.mount('#app')
