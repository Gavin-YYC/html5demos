<template lang="html">
  <ul>
    <li v-for="todo in todolist" class="item"
      :class="{completed: todo.done, editing: todo === editTodo}">
      <div class="view">
        <label v-bind:class="{done: todo.done}" @dblclick="changeTodo(todo)">
          <input type="checkbox" v-model="todo.done">
          {{todo.title}}
        </label>
        <span class="remove" @click="remove(todo)">X</span>
      </div>
      <div class="edit">
        <input type="text"
          v-model="todo.title"
          @keyup.enter="doneEdit(todo)"
          @blur="doneEdit(todo)"
          @keyup.esc="cancelEdit(todo)">
      </div>
    </li>
  </ul>
</template>

<script>
import Store from './store'

export default {
  data() {
    return Store.data
  },

  methods: {
    remove( todo ) {
      Store.remove( todo )
    },
    changeTodo( todo ) {
      this.editTodo = todo
    },
    doneEdit( todo ) {
      this.editTodo = null
    }
  }
}
</script>

<style lang="css">
.item {
  width: 300px;
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #ccc;
}
.item .edit {
  display: none;
}
.item.completed {
  text-decoration: line-through;
}
.item.editing .view {
  display: none;
}
.item.editing .edit {
  display: block;
}
.remove {
  display: none;
  width: 50px;
  text-align: center;
  float: right;
  cursor: pointer;
}
.item:hover .remove {
  display: inline-block;
}
</style>
