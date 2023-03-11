import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Menu from '../views/Menu'
import Profile from '../views/Profile'
import Login from '../views/Login'
import WhatsOn from '../views/Whats-on'
import ThingsToDo from '../views/ThingsToDo'
import SignUp from '../views/SignUp'
import Product from '../views/Product'
import LoginPostSignup from '../views/LoginPostSignup'
import Gallery from '../views/Gallery'
import GalleryForm from '../components/GalleryForm'
import GalleryOpen from '../components/GalleryOpen'
import GalleryReels from '../components/GalleryReels'

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
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/loginPostSignup',
    name: 'LoginPostSignup',
    component: LoginPostSignup
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/galleryForm',
    name: 'GalleryForm',
    component: GalleryForm
  },
  {
    path: '/galleryOpen',
    name: 'GalleryOpen',
    component: GalleryOpen
  },
  {
    path: '/galleryReels',
    name: 'GalleryReels',
    component: GalleryReels
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
