import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'

import './assets/css/bootstrap.min.css' // bootstrap 4
import './assets/css/main.css' // custom css

import './assets/js/scripts.js'; // custom js

createApp(App).use(router).mount('#app')
