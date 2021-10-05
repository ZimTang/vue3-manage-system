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
      },
      {
        path: '/baseForm',
        meta: {
          title: '基本表单'
        },
        component: () => import('../views/BaseForm.vue')
      },
      {
        path: '/upload',
        meta: {
          title: '文件上传'
        },
        component: () => import('../views/Upload.vue')
      },
      {
        path: '/editor',
        meta: {
          title: '富文本编辑器'
        },
        component: () => import('../views/Editor.vue')
      },
      {
        path: '/permission',
        meta: {
          title: '权限测试'
        },
        component: () => import('../views/Permission.vue')
      },
      {
        path: '/404',
        meta: {
          title: '找不到页面'
        },
        component: () => import('../views/404.vue')
      },
      {
        path: '/donate',
        meta: {
          title: '支持作者'
        },
        component: () => import('../views/Donate.vue')
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