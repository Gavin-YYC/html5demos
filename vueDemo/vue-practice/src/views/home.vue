<template lang="html">
  <div class="home">
    <p>{{home}}</p>
    <pre>{{JSON.stringify(admin, null, 4)}}</pre>
    <el-alert title="成功提示的文案" type="success"></el-alert>
  </div>
</template>

<script>

import Auth from '../lib/auth'

import {Alert} from 'element-ui'

export default {
  data() {
    return {
      home: 'home',
      admin: {}
    }
  },
  components: {
    "el-alert": Alert
  },
  // 组件编译挂载后执行
  mounted() {
    var user = this.$localStore.getItem( Auth.userKey )
    if ( user ) {
      this.admin = user
    } else {
      this.$router.push( '/login' )
    }
  }
}
</script>

<style lang="css">
</style>
