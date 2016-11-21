import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use( VueRouter )

// 创建router 实例
// 注入路由
export default new VueRouter({
  routes
})
