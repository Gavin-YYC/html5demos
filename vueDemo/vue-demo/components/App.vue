<template>
  <div id="app">
    <toolbar></toolbar>
    <note-list></note-list>
    <editor></editor>
  </div>
</template>

<script>
  import Toolbar from './Toolbar.vue'
  import NotesList from './NotesList.vue'
  import Editor from './Editor.vue'

  export default {
    components: {
      Toolbar,
      NotesList,
      Editor
    }
  }
</script>
