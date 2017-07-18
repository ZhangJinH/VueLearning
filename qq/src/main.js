// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import elementui from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-default/index.css'
Vue.use(elementui)

Vue.prototype.$http = axios

Vue.prototype.$apiurl = 'http://192.168.31.217:8524/v1'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
