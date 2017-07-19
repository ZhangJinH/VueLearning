
const actions = {
  add_note({commit}) {
    return commit('ADD_NOTE')
  },
  delete_note({commit}) {
    return commit('DELETE_NOTE')
  },
  edite_note({commit},text) {
    return commit('EDITE_NOTE',text)
  },
  add_favor({commit}){
    return commit('ADD_FAVOR')
  },
  delete_favor({commit}) {
    return commit('DELETE_FAVOR')
  },
  set_activenote({commit},item) {
    return commit('SET_ACTIVENOTE',item)
  }
}

export default actions
