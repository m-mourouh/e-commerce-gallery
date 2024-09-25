import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import i18n from './locales/i18n'
import axios from 'axios'

axios.defaults.baseURL = 'https://fakestoreapi.com'
const app = createApp(App)


app.use(store).use(router).use(i18n).use({
    install: (app) => {
        app.config.globalProperties.$axios = axios;
        app.provide('axios', axios);
    }
}).mount('#app')