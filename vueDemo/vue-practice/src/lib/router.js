import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use( VueRouter )

import Login from '../views/login.vue'
import Home from '../views/home.vue'
import TodoList from '../components/todolist.vue'

// 定义路由
const routes = [
  // 简单路由
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/todolist', component: TodoList }
  // 嵌套路由
]


// 创建router 实例
// 注入路由
export default new VueRouter({
  routes
})
