import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/data-table',
    name: 'DataTable',
    component: () => import(/* webpackChunkName: "data-table" */ '../views/DataTable.vue')
  },
  {
    path: '/base-icon',
    name: 'BaseIcon',
    component: () => import(/* webpackChunkName: "base-icon" */ '../views/BaseIcon.vue')
  },
  {
    path: '/base-input',
    name: 'BaseInput',
    component: () => import(/* webpackChunkName: "base-input" */ '../views/BaseInput.vue')
  },
  {
    path: '/horizontal-scroll',
    name: 'HorizontalScroll',
    component: () => import(/* webpackChunkName: "horizontal-scroll" */ '../views/HorizontalScroll.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
