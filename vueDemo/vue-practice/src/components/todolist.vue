<template lang="html">
  <div class="">
    <todo-form :username="username"></todo-form>
    <todo-list :todolist="todolist"></todo-list>
    <input type="checkbox" v-model="checkAll"> 全部完成
    <button type="button" name="button" @click="removeComplete">删除</button>
  </div>
</template>

<script>
import TodoList from './list.vue'
import TodoForm from './form.vue'
import Store from './store'

export default {
  data() {
    return {
      username: 'Gavin',
      todolist: Store.data.todolist
    }
  },

  computed: {
    checkAll: {
      get() {
        return Store.data.todolist.filter( ( item ) => {
          return !item.done
        }).length === 0;
      },
      set( value ) {
        Store.data.todolist.forEach( ( item, index ) => {
          item.done = value
        })
      }
    }
  },

  methods: {
    removeComplete() {
      Store.removeComplete()
    }
  },

  components: {
    TodoList,
    TodoForm
  }
}
</script>

<style lang="css">
</style>
