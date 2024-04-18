import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../views/HomePage.vue'
// import AboutView from '@components/AboutView.vue'



Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    // This route is visible to newly applying students. 
    path: '/applications',
    name: 'apply',

    component: () => import('../views/Enrollment.vue')
  },
  {
    path: '/login',
    name:'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/apply',
    name:'application',
    component: () => import('../views/ApplicationPage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
