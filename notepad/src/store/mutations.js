import * as types from './mutation-types'

const mutations =  {
  [types.ADD_NOTE](state) {
    let noteid = Math.round(Math.random()*10000)
    let note = {
      id:noteid,
      text:'New Log to Do,Let us write something',
      favor:false
    }
    state.notes.push(note)
    console.log(state.notes);
  },
  [types.DEL_NOTE](state) {
    let notes = state.notes
    for(let key in notes) {
      if(notes[key].id === state.activeNote.id) {
        state.notes.splice(key ,1)
      }
    }
    state.activeNote = state.notes[0]
  },
  [types.EDIT_NOTE](state,text) {
    state.activeNote.text = text
  },
  [types.SET_ACTIVE](state,item) {
    state.activeNote = item
  },
  [types.ADD_FAVOR](state,item) {
    let notes = state.notes
    item.favor = true
    for(let key in notes){
      if(notes[key].id == item.id) {
        state.notes[key].favor = true
      }
    }
    state.favorNotes.push(item)
  },
  [types.DEL_FAVOR](state,item) {
    let favors = state.favorNotes
    let notes = state.notes
    for(let key in notes) {
      if(notes[key].id == item.id) {
        state.notes[key].favor = false
      }
    }
    for(let key in favors) {
      if(favors[key].id === item.id) {
        state.favorNotes.splice(key ,1)
      }
    }
  }
}

export default mutations
