/**
 * vue-router路由管理
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/' ,
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/Welcome.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router