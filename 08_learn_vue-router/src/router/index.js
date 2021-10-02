import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// import Home from '../pages/Home'
// import About from '../pages/About'

// 创建路由映射关系表 routes
const routes = [
  // { path: '/', component: Home },    一般进行重定向 更适合企业业务
  // 使用函数进行路由懒加载
  // 打包时 会自动进行一个分包的操作
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    // magic comment  魔法注释 给打包的文件提供一个chunk 的名字
    component: () => import(/* webpackChunkName:"home-chunk" */ '../pages/Home'),
    meta: {
      name: 'why',
      age: 18,
      height: 18
    }, //路由元数据，有些地方可以访问到
    children: [
      { path: '', redirect: '/home/message' },
      { path: 'message', component: () => import('../pages/HomeMessage.vue') },
      { path: 'shops', component: () => import('../pages/HomeShops.vue') }
    ]
  },
  {
    path: '/about',
    name: 'about', //给路由起个名字
    component: () => {
      return import('../pages/About')
    }
  },
  {
    path: '/user/:username/id/:id',
    component: () => {
      return import('../pages/User')
    }
  },
  {
    path: '/login',
    component: () => {
      return import('../pages/Login')
    }
  },
  // 当匹配到不存在的路由时，显示某一个组件
  {
    path: '/:pathMatch(.*)',
    component: () => import('../pages/Notfound')
  }
]

// 创建 路由对象 router
const router = createRouter({
  routes,
  history: createWebHistory()
  // history: createWebHashHistory()
})

// 动态添加路由 （外层顶级对象）
const categoryRoute = {
  path: '/category',
  component: () => import('../pages/Category')
}
router.addRoute(categoryRoute)

// 添加二级路由对象
// ("路由的名称 name")
router.addRoute('home', { path: 'moment', component: () => import('../pages/HomeMoment.vue') })
// 动态删除路由
// 1.添加一个name相同的路由
// 2.removeRoute方法，传入路由名称
// 3.通过addRoute的返回值回调
// 检测路由是否存在
// hasRoute
// 检测当前所有的路由对象
// getRoutes

// 来个导航守卫
let counter = 0
// to,from 都是 route 对象
// to 即将跳转到的 路由对象
// from 从哪里开始跳的 路由对象
//
// 通过返回值来控制
// 1. false 不进行导航
// 2. undefined 即不写返回值，进行默认导航
// 3. 返回 String 跳转到对应的路径中
router.beforeEach((to, from) => {
  // if (to.path === '/about') {
  //   return false
  // }
  // if (to.path.indexOf('/home') !== -1) {
  //   return '/login'
  // } else {
  //   console.log(`进行了${++counter}次路由跳转`)
  // }
  if (to.path !== '/login') {
    const token = window.localStorage.getItem('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
