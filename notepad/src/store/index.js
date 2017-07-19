import Vue from 'vue'
import Vuex from 'vuex'
//actions中主要是用来处理异步操作
import  actions from './actions'
//getters是用来获取state中状态
import * as getters from './getters'
//state中存放vuex管理的数据
import state from './state'
//mutations只能处理同步操作
import mutations from './mutations'
//在控制台输出关于vuex相关操作的信息
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
//暴露一个store出去，方便vue进行vuex的新建
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict:debug,
  plugins:debug? [createLogger()] : []
})
