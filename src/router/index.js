import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Menu from '../views/Menu'
import Profile from '../views/Profile'
import Login from '../views/Login'
import WhatsOn from '../views/Whats-on'
import ThingsToDo from '../views/ThingsToDo'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/whatsOn',
    name: 'WhatsOn',
    component: WhatsOn
  },
  {
    path: '/thingsToDo',
    name: 'ThingsToDo',
    component: ThingsToDo
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
