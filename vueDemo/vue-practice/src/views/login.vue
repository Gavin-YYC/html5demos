<template lang="html">
  <div class="login-box" :class="{isCreate: isCreate}">
    <p>
      邮箱：<input type="text" v-model="credentials.email" placeholder="请输入邮箱">
    </p>
    <p>
      密码：<input type="password" v-model="credentials.password" placeholder="请输入密码">
    </p>
    <p class="login">
      <input type="button" @click="login" value="登录">
      <a href="#" @click.prevent="isCreate = !isCreate">还没有账号？去注册</a>
    </p>
    <p class="create">
      <input type="button" @click="create" value="注册">
      <a href="#" @click.prevent="isCreate = !isCreate">已经有账号？去登录-></a>
    </p>
    <p>
      <a href="#" @click.prevent="findPass">忘记密码？去找回-></a>
    </p>
  </div>
</template>

<script>
import Auth from '../lib/auth'
export default {
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      isCreate: false
    }
  },
  methods: {
    login() {
      Auth.login( this, this.credentials, () => {
        this.$router.push('/home')
      })
    },
    create() {
      Auth.create( this, this.credentials )
    },
    findPass() {
      Auth.findPass( this, this.credentials.email )
    }
  }
}
</script>

<style lang="less">
.login-box {
  .create {
    display: none;
  }
}
.isCreate {
  .login {
    display: none;
  }
  .create {
    display: block;
  }
}
</style>
