/**
 * vue-router路由管理
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path:'/',
        redirect: '/welcome'
      },
      {
        path: '/welcome',
        meta: {
          title: '系统首页',
        },
        component: () => import('../views/Welcome.vue'),
      },
      {
        path: '/baseTable',
        meta: {
          title: '基础表格',
        },
        component: () => import('../views/BaseTable.vue'),
      },
      {
        path: '/tabs',
        meta: {
          title: 'tab选项卡',
        },
        component: () => import('../views/Tabs.vue'),
      },
      {
        path: '/baseForm',
        meta: {
          title: '基本表单',
        },
        component: () => import('../views/BaseForm.vue'),
      },
      {
        path: '/upload',
        meta: {
          title: '文件上传',
        },
        component: () => import('../views/Upload.vue'),
      },
      {
        path: '/editor',
        meta: {
          title: '富文本编辑器',
        },
        component: () => import('../views/Editor.vue'),
      },
      {
        path: '/permission',
        meta: {
          title: '权限测试',
          permission: true,
        },
        component: () => import('../views/Permission.vue'),
      },
      {
        path: '/404',
        meta: {
          title: '找不到页面',
        },
        component: () => import('../views/404.vue'),
      },
      {
        path: '/403',
        meta: {
          title: '没有权限',
        },
        component: () => import('../views/403.vue'),
      },
      {
        path: '/charts',
        meta: {
          title: 'echarts图表',
        },
        component: () => import('../views/Charts.vue'),
      },
      {
        path: '/i18n',
        meta: {
          title: '国际化功能',
        },
        component: () => import('../views/I18n.vue'),
      },
      {
        path: '/donate',
        meta: {
          title: '支持作者',
        },
        component: () => import('../views/Donate.vue'),
      },
      {
        path: '/user',
        meta: {
          title: '个人中心',
        },
        component: () => import('../views/User.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const username = localStorage.getItem('username')
  if (!username && to.path !== '/login') {
    next('/login')
  } else if (to.meta.permission) {
    console.log(123)
    username === 'admin' ? next() : next('/403')
  } else {
    next()
  }
})

export default router
