import feather from 'feather-icons';
feather.replace();

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

createApp(App).use(router).mount('#app')