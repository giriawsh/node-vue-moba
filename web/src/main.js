import { createApp } from 'vue'
import App from './App.vue'

import './assets/scss/style.scss';
import router from './router'
import './assets/iconfont/iconfont.css';

import Card from "@/components/Card";
import ListCard from "@/components/ListCard";
// import Swiper from "swiper";
const app = createApp(App).use(router);
app.component('m-card', Card);
app.component('m-list-card', ListCard);
app.mount('#app')
