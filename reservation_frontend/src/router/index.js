import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: function () {
      return import('../views/BookingsView.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import('../views/ContactView.vue')
    }
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: function () {
      return import('../views/UserProfileView.vue')
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: function () {
      return import('../views/AdminView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
