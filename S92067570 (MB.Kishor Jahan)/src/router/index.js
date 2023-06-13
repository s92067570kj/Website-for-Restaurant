import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import About from '../views/About.vue'
import Hotels from '../views/Hotels.vue'
import Contactus from '../views/Contactus.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Hotels',
    name: 'Hotels',
    component: Hotels
  },
  {
    path: '/Contactus',
    name: 'Contactus',
    component: Contactus
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
