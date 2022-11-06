import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { loadImage } from './LoadImage.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    beforeEnter() {
      loadImage('About');
    }
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
    component: () => import('../views/DirectingView.vue'),
    beforeEnter() {
      loadImage('Directing');
    }
  },
  {
    path: '/directing/bolognese',
    name: 'Bolognese',
    component: () => import('../views/BologneseView.vue'),
    beforeEnter() {
      loadImage('Bolognese');
    }
  },
  {
    path: '/directing/helium',
    name: 'Helium',
    component: () => import('../views/HeliumView.vue'),
    beforeEnter() {
      loadImage('Helium');
    }
  },
  {
    path: '/directing/bjgg',
    name: 'BadJewGoodGirl',
    component: () => import('../views/BadJewGoodGirlView.vue'),
    beforeEnter() {
      loadImage('BadJewGoodGirl');
    }
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
