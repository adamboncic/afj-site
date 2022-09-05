import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/acting',
    name: 'Acting',
    component: () => import('../views/ActingView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/directing',
    name: 'Directing',
    component: () => import('../views/DirectingView.vue')
  },
  {
    path: '/directing/bolognese',
    name: 'Bolognese',
    component: () => import('../views/BologneseView.vue')
  },
  {
    path: '/directing/helium',
    name: 'Helium',
    component: () => import('../views/HeliumView.vue')
  },
  {
    path: '/directing/bjgg',
    name: 'BJGG',
    component: () => import('../views/BJGGView.vue')
  },
  {
    path: '/photography',
    name: 'Photography',
    component: () => import('../views/PhotographyView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
