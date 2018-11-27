import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import home from '@/views/home'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/',
    name: 'home',
    component: home
  }
]

export default new Router({
  mode: 'history',
  routes
})
