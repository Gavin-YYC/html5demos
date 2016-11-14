import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

const state = {
  notes: [],
  activeNote: {}
}

const mutations = {
  // 增加笔记
  ADD_NOTE ( state ) {
    const newNote = {
      text: 'New note',
      favorite: fals
    }
    state.notes.push( newNote )
    state.activeNote = newNote
  },

  // 编辑笔记
  EDIT_NOTE ( state, text ) {
    state.activeNote.text = text
  },

  // 删除笔记
  DELETE_NOTE ( state ) {
    state.notes.$remove( state.activeNote )
    state.activeNote = state.notes[0]
  },

  // 收藏\取消收藏笔记
  TOGGLE_FAVORITE ( state ) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  // 标记活跃笔记
  SET_ACTIVE_NOTEE( state, note ) {
    state.activeNote = note
  }

}

export default new Vuex.Store({
  state,
  mutations
})
