import { createRouter, createWebHashHistory } from 'vue-router'
import Main from "@/views/Main";
import CategoryEdit from "@/views/CategoryEdit";
import CategoryList from "@/views/CategoryList";
const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/categories/create',
        component: CategoryEdit
      },
      {
        path: '/categories/list',
        component: CategoryList
      },
      {
        path: '/categories/edit/:id',
        component: CategoryEdit,
        props: true
      }
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
