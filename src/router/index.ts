import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/detail.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue'),
    },
  ],
})

export default router
