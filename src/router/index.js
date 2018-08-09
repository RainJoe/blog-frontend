import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import store from '../store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index 
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      beforeEnter(to, from, next) {
        if (store.getters.is_admin) {
          next()
        } else {
          next({path: '/'})
        }
      },
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
