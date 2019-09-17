import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PageNotFound from './views/PageNotFound.vue'
import IE from './views/IE.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/browser-support',
      name: 'ie',
      component: IE
    },
    {
      path: '**',
      name: '404',
      component: PageNotFound
    }
  ]
})
