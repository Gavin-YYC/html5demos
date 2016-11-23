// 组件懒加载
// https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
// const Home = resolve => require(['../views/home.vue'], resolve)

// 定义路由
export default [
  // 简单路由
  { path: '/', component: resolve => require(['../views/home.vue'], resolve) },
  { path: '/home', component: resolve => require(['../views/home.vue'], resolve) },
  { path: '/login', component: resolve => require(['../views/login.vue'], resolve) },
  { path: '/todolist', component: resolve => require(['../components/todolist.vue'], resolve) }
  // 嵌套路由
]
