import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import PublicLayout from '@/layouts/PublicLayout.vue'
import ResetPasswordView from '@/views/ResetPasswordView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: { layout: 'AppLayout' }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { layout: 'PublicLayout' }
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetPasswordView,
      meta: { layout: 'PublicLayout' }
    },
  ],
})

export default router
