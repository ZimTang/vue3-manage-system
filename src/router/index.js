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
        path: '/welcome',
        meta: {
          title: '系统首页'
        },
        component: () => import('../views/Welcome.vue'),
      },
      {
        path: '/baseTable',
        meta: {
          title: '基础表格'
        },
        component: () => import('../views/BaseTable.vue')
      },
      {
        path: '/tabs',
        meta: {
          title: 'tab选项卡'
        },
        component: () => import('../views/Tabs.vue')
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