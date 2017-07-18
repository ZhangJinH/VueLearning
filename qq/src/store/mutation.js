/**
 * Created by OFFICE12 on 2017/7/18.
 */
import * as types from './mutation-types'

const mutations = {
  [types.SET_INDEX](state,index) {
    state.currentIndex = index
  }
}

export default mutations
