// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import axios from 'axios'
import Global from 'common/js/global'
import globalComponents from 'base/globalComponents'

Vue.prototype.axios = axios
Vue.prototype.GLOBAL = Global

import router from '@/router/index'

// mockAPI
import mockApi from './mockApi/index'
mockApi('web', 'api')

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.config.performance = true

Vue.use(globalComponents)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

console.log(Vue.filter())
console.log(Vue.directive())
console.log(Vue.component())