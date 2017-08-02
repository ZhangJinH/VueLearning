// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import echarts from 'echarts'
import MuseUi from 'muse-ui'
import store from './store'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css' // 使用 carbon 主题
import {DatePicker,Upload,Button} from 'element-ui'

Vue.use(DatePicker)
Vue.use(Upload)
Vue.use(Button)

Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts

axios.defaults.withCredentials = true
//登陆验证
axios.interceptors.response.use(function (res) {
    return res
  },
  function (err) {
    if(err.response.status === 401) {
      console.log('发生错误了');
      router.replace('/login')
      return
    }
  })


Vue.use(MuseUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
