import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
//import 'vuetify/styles'

const vuetify = createVuetify({
    theme: false,
    components: components,
    directives,
})


const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
