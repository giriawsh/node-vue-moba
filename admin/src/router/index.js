import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Main from "@/views/Main";
const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
