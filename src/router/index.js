import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/approval',
    children: [{
      path: 'approval',
      name: 'approval',
      component: () => import('@/views/approval/index'),
      meta: { title: '审批任务', icon: 'dashboard' }
    }]
  },

  {
    path: '/product',
    component: Layout,
    redirect: '/product/index',
    name: 'product',
    // meta: { title: '商品档案清单', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Product',
        component: () => import('@/views/product/index'),
        meta: { title: '商品档案清单', icon: 'table' }
      }
    ]
  },

  // 数据字典
  {
    path: '/dictionary',
    component: Layout,
    redirect: '/dictionary/index',
    children: [
      {
        path: 'index',
        name: 'Dictionary',
        component: () => import('@/views/dictionary/index'),
        meta: { title: '数据字典', icon: 'form' }
      }
    ]
  },
  // 产品组合设置
  {
    path: '/assemble',
    component: Layout,
    redirect: '/assemble/index',
    children: [
      {
        path: 'index',
        name: 'Assemble',
        component: () => import('@/views/assemble/index'),
        meta: { title: '产品组合设置', icon: 'form' }
      }
    ]
  },

  // 角色管理
  {
    path: '/role',
    component: Layout,
    redirect: '/role/index',
    children: [
      {
        path: 'index',
        name: 'Role',
        component: () => import('@/views/role/index'),
        meta: { title: '角色管理', icon: 'form' }
      }
    ]
  },

  // 用户管理
  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    children: [
      {
        path: 'index',
        name: 'User',
        component: () => import('@/views/user/index'),
        meta: { title: '用户管理', icon: 'form' }
      }
    ]
  },

  // 菜单管理
  {
    path: '/menu',
    component: Layout,
    redirect: '/menu/index',
    children: [
      {
        path: 'index',
        name: 'Menu',
        component: () => import('@/views/menu/index'),
        meta: { title: '菜单管理', icon: 'form' }
      }
    ]
  },



  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
