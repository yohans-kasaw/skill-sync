import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import { createVuetify } from 'vuetify'
import { createPinia } from 'pinia'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
//import 'vuetify/styles'

const vuetify = createVuetify({
    theme: false,
    components: components,
    directives,
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(vuetify)
app.mount('#app')
