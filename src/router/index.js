import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../view/home.vue'
import About from '../view/about.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
