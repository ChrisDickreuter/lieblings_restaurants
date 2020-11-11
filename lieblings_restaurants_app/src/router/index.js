import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue') 
  },
  {
    path: '/restaurants',
    alias: '/',
    name: 'Restaurants',
    component: () => import(/* webpackChunkName: "about" */ '../views/Restaurants.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/restaurants/:id',
    name: 'RestaurantDeatil',
    component: () => import(/* webpackChunkName: "items" */ '../views/RestaurantDetail.vue'),
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  base: "/",
  routes
})

router.beforeEach((to, from, next) => {
  // let currentTime = new Date().getTime()
  // let expireTime = store.getters.isExpired

  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn /*&& expireTime > currentTime*/) {
          next()
          return
      }
      store.dispatch('logout')
        .then(() => next('/login'))      
  } else {
      next()
  }
})

export default router
