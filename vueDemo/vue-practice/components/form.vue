<template lang="html">
  <div class="">
    <h1>{{username}} 的 todolist</h1>
    <form v-on:submit.prevent="add">
      <input type="text" v-model="input">
      <input type="submit" value="add">
    </form>
  </div>
</template>

<script>
import Store from './store'
export default {
  props: {
    username: {
      type: String,
      default: 'Unnamed'
    }
  },
  data() {
    return {
      input: 'nothing'
    }
  },
  methods: {
    add() {
      Store.add( this.input )
      this.input = ''
    }
  }
}
</script>

<style lang="css">
</style>
