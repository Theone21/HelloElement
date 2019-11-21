import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
          requiresAuth: true
      }
    },{
      path: '/about',
      name: 'about',
      component: () => import( /* webpackChunkName:'about' */ './views/About.vue'),
      meta: {
          requiresAuth: true
      }
    },{
      path: '/instock/register',
      name: 'register',
      component: () => import( /* webpackChunkName:'register' */ './views/instock/Register.vue'),
      meta: {
          requiresAuth: false
      }
    },{
      path: '/instock/sampling',
      name: 'sampling',
      component: () => import( /* webpackChunkName:'sampling' */ './views/instock/Sampling.vue'),
      meta: {
          requiresAuth: true
      }
    },{
      path: '/instock/send',
      name: 'send',
      component: () => import( /* webpackChunkName:'send' */ './views/instock/Send.vue'),
      meta: {
          requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)){
        console.log("需要登录的页面：" + to.name)
    }
    
    console.log(arguments)
    next();
})

export default router
