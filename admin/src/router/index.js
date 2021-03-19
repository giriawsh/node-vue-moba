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
      }
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
