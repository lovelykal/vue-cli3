import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/myinput',
    name: 'myinput',
    component: () => import('@/components/my-input.vue')
  },
  {
    path: '/myradio',
    name: 'myradio',
    component: () => import('@/components/my-radio.vue')
  },
  {
    path: '/myswiper',
    name: 'myswiper',
    component: () => import('@/components/my-swiper/my-swiper')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// console.log(router.beforeEach)

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})

export default router
