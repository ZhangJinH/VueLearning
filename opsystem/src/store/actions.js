import axios from 'axios'
import state from "./state";

const actions = {
  'set_user':function({commit},id) {
    let user = {}
    axios.get(state.apiurl+'/user/getuserinfobyid?id='+id)
      .then((res) => {
        user = res.data
        return commit('SET_USER',user)
      })
  }
}
export default actions
