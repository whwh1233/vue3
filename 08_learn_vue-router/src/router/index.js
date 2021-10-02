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
  // 当匹配到不存在的路由时，显示某一个组件
  {
    path: '/:pathMatch(.*)',
    component: () => import('../pages/Notfound')
  }
]

// 创建 理由对象 router
const router = createRouter({
  routes,
  history: createWebHistory()
  // history: createWebHashHistory()
})

export default router
