import Vue from 'vue'
import Store from './vuex/store'
import App from './components/App.vue'

new Vue({
  Store, // 注入到所有子组件
  el: 'body',
  components: { App }
})
