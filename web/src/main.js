import { createApp } from 'vue'
import App from './App.vue'

import './assets/scss/style.scss';
import router from './router'
// import Swiper from "swiper";
const app = createApp(App).use(router);
app.mount('#app')
