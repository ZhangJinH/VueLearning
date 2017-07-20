const actions = {
  add_note ({commit}) {
    return commit('ADD_NOTE')
  },
  del_note ({commit}) {
    return commit('DEL_NOTE')
  },
  edit_note　({commit},text) {
    return commit('EDIT_NOTE',text)
  },
  set_active ({commit},item) {
    return commit('SET_ACTIVE',item)
  },
  add_favor ({commit},item) {
    return commit('ADD_FAVOR',item)
  },
  del_favor ({commit},item) {
    return commit('DEL_FAVOR',item)
  }
}
export default actions
