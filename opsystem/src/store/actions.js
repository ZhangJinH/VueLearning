import axios from 'axios'
import state from "./state";

const actions = {
  'set_user':function({commit}) {
    let user = {}
    axios.get(state.apiurl+'/user/getuserinfobyid')
      .then((res) => {
        user = res.data
        return commit('SET_USER',user)
      })
  }
}
export default actions
