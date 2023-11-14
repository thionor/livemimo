import { createRouter, createWebHistory } from 'vue-router'
import GetStarted from '../views/GetStartedView.vue'
import LoginView from '../views/LoginView.vue';

const routes = [
  {
    path: '/',
    name: 'getStarted',
    component: GetStarted
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
