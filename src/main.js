// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import axios from 'axios'
import Global from 'common/js/global'
import globalComponents from 'base/globalComponents'
import filters from '@/filter/index'

Vue.prototype.axios = axios
Vue.prototype.GLOBAL = Global

import router from '@/router/index'

// mockAPI
import mockApi from './mockApi/index'
mockApi('web', Global.RP)

FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.config.performance = true

Vue.use(globalComponents)

/* eslint-disable no-new */
new Vue({
  filters,
  router,
  render: h => h(App)
}).$mount('#app-box')

;(function () {
  var src = '//cdn.bootcss.com/eruda/1.3.0/eruda.min.js'
  if (!/eruda=true/.test(window.location) && localStorage.getItem('active-eruda') !== 'true') return
  document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>')
  document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>')
})()