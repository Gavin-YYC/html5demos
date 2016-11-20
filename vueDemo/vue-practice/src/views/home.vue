<template lang="html">
  <div class="home">
    <p>{{home}}</p>
    <pre>{{JSON.stringify(admin, null, 4)}}</pre>
  </div>
</template>

<script>

import Auth from '../lib/auth'

export default {
  data() {
    return {
      home: 'home',
      admin: {}
    }
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
