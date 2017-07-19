import * as types from './mutation-types'

export default {
  [types.ADD_NOTE](state) {
    const noteid = Math.round(Math.random()*10000)
    const note = {
      id: noteid,
      text: 'New Note, write something',
      favor:false
    }
    state.notes.push(note)
  },
  [types.DELETE_NOTE](state) {
    let notes = state.notes
    for (let key in notes) {
      if(notes[key].id === state.activeNote.id) {
        state.notes.splice(key,1)
      }
    }
    state.activeNote = state.notes[0]
  },
  [types.EDITE_NOTE](state,text) {
    state.activeNote.text = text
    for (let item in state.notes){
      if(item.id === state.activeNote.id){
        item.text = text
      }
    }
  },
  [types.ADD_FAVOR](state) {
    state.activeNote.favor = true
    state.favorNotes.push(state.activeNote)
  },
  [types.DELETE_FAVOR](state) {
    state.activeNote.favor = false
    for (let item in state.favorNotes){
      if( item.id === state.activeNote.id) {
        state.favorNotes.splice(item,1)
      }
    }
  },
  [types.SET_ACTIVENOTE](state,item) {
    state.activeNote = item
  }
}
