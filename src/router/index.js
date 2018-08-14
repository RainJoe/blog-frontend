import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import User from '@/components/User'
import Article from '@/components/Article'
import ArticleAddEdit from '@/components/ArticleAddEdit'

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
    }
  ]
})
