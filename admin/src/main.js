import {createApp} from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from './router'
import http from "@/http";

import './style.css'
const app = createApp(App).use(router)
app.config.globalProperties.$http = http;
// app.use(http(app));
installElementPlus(app)
app.mount('#app')