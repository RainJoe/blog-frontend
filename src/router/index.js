import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Admin from '@/components/Admin'
import User from '@/components/User'
import Article from '@/components/Article'
import ArticleAddEdit from '@/components/ArticleAddEdit'
import Detail from '@/components/Detail'
import Archive from '@/components/Archive'
import About from '@/components/About'

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
      path: '/register',
      name: 'Register',
      component: Register
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
      component: Admin,
      children: [
        {
          path: 'users',
          name: 'User',
          component: User
        },
        {
          path: 'articles',
          name: 'Article',
          component: Article
        },
        {
          path: 'addarticle',
          name: 'ArticleAdd',
          component: ArticleAddEdit
        },
        {
          path: 'editarticle/:id',
          name: 'EditArticle',
          component: ArticleAddEdit
        }
      ]
    },
    {
      path:'/article/:id',
      name: 'articleDetail',
      component: Detail
    },
    {
      path: '/archive',
      name: 'archive',
      component: Archive
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
