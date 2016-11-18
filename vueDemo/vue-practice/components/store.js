// Store
export default {
  data: {
    todolist: [
      {title: '11', done: false},
      {title: '22', done: true}
    ],
    editTodo: null
  },
  add( title ) {
    if ( !title ) {
      return;
    }
    this.data.todolist.unshift({
      title: title,
      done: false
    })
  },
  remove( todo ) {
    this.data.todolist.splice( this.data.todolist.indexOf( todo ), 1 )
    return;
  },
  removeComplete() {
    this.data.todolist = this.data.todolist.filter( ( item ) => {
      return item.done === false
    });
  }
}
