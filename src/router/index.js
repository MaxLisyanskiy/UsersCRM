import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '@/views/pages/Home'
import NotFound from '@/views/pages/404'
import Users from '@/views/pages/Users'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/*',
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
