import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },{
      path: '/instock/register',
      name: 'register',
      component: () => import('./views/instock/Register.vue')
    },{
      path: '/instock/sampling',
      name: 'sampling',
      component: () => import('./views/instock/Sampling.vue')
    },{
      path: '/instock/send',
      name: 'send',
      component: () => import('./views/instock/Send.vue')
    }
  ]
})
