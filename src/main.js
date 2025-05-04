import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Material from '@primeuix/themes/material'

import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Material,
        options: {
            darkModeSelector: '.dark-mode',
            cssLayer: true
        }
    }
})
app.mount('#app')
