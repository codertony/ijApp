import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import fg from './fg'

var indexRouter = [
  {
    path: '/',
    redirect: '/homePage/userList'
  }
]

var ROUTERS = indexRouter.concat(home, fg)

Vue.use(Router)

export default new Router({
  routes: ROUTERS
})
