import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { Button } from 'primevue'

const app = createApp(App)
app.use(PrimeVue)
app.component('Buttons',Button)
app.mount('#app')

