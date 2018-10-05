import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import store from '../stores/store'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login')
    },
    {
      path: '/chat',
      name: 'chat',
      meta: {
        require_auth: true
      },
      component: () => import('../views/Chat')
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.require_auth)) {
    if (!store.state.authentication.isLoggedIn) {
      next({
        path: '/login',
        query: { nextUrl: to.fullPath }
      })
    } else if (store.getters['authentication/token'] != null) {
      store.dispatch('authentication/verify')
        .then(response => {
          if (store.state.authentication.isLoggedIn) {
            next()
          } else {
            next({
              path: '/login',
              query: { nextUrl: to.fullPath }
            })
          }
        })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
