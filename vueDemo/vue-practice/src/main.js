import Vue from 'vue'
import App from './components/app.vue'
import VueRouter from 'vue-router'

// 引入store
import store from './lib/store'

// 引入router
import router from './lib/router'

// 引入存储
import storage from './lib/storage'
Vue.prototype.$localStore = storage

new Vue({
  el: '#app',
  router,
  store,
  render: h => h( App )
}).$mount('#app')
