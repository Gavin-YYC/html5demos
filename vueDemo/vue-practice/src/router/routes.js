// 定义路由
export default [
  // 简单路由
  { path: '/', component: require('../views/home.vue') },
  { path: '/home', component: require('../views/home.vue') },
  { path: '/login', component: require('../views/login.vue') },
  { path: '/todolist', component: require('../components/todolist.vue') }
  // 嵌套路由
]
