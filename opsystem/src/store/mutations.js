import * as types from './mutation-types'

export default {
  [types.SET_USER](state,item) {
    state.UserInfo = item
  },
  [types.REMOVE_USER](state) {
    state.UserInfo = {}
  }
}
