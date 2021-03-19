import { createRouter, createWebHashHistory } from 'vue-router'
import Main from "@/views/Main";
import CategoryEdit from "@/views/CategoryEdit";
import CategoryList from "@/views/CategoryList";
import ItemEdit from "@/views/ItemEdit";
import ItemList from "@/views/ItemList";
import HeroEdit from "@/views/HeroEdit";
import HeroList from "@/views/HeroList";
import ArticleEdit from "@/views/ArticleEdit";
import ArticleList from "@/views/ArticleList";
import AdEdit from "@/views/AdEdit";
import AdList from "@/views/AdList";
import AdminUserEdit from "@/views/AdminUserEdit";
import AdminUserList from "@/views/AdminUserList";
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
      },

      {
        path: '/items/create',
        component: ItemEdit
      },
      {
        path: '/items/list',
        component: ItemList
      },
      {
        path: '/items/edit/:id',
        component: ItemEdit,
        props: true
      },
      {
        path: '/heroes/create',
        component: HeroEdit
      },
      {
        path: '/heroes/list',
        component: HeroList
      },
      {
        path: '/heroes/edit/:id',
        component: HeroEdit,
        props: true
      },
      {
        path: '/articles/create',
        component: ArticleEdit
      },
      {
        path: '/articles/list',
        component: ArticleList
      },
      {
        path: '/articles/edit/:id',
        component: ArticleEdit,
        props: true
      },
      {
        path: '/ads/create',
        component: AdEdit
      },
      {
        path: '/ads/list',
        component: AdList
      },
      {
        path: '/ads/edit/:id',
        component: AdEdit,
        props: true
      },
      {
        path: '/admin_users/create',
        component: AdminUserEdit
      },
      {
        path: '/admin_users/list',
        component: AdminUserList
      },
      {
        path: '/admin_users/edit/:id',
        component: AdminUserEdit,
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
