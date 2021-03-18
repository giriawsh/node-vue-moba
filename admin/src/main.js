import {createApp} from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from './router'
import http from "@/http";

const app = createApp(App).use(router)
app.config.globalProperties.$http = http;
installElementPlus(app)
app.mount('#app')