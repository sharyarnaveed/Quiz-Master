import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Createquizintro from '@/views/createquizintro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/startquiz',
      name:'startquiz',
      component: () => import('../views/startquiz.vue')
    },
    {
      path:'/thequiz',
      name:'thequiz',
      component: () => import('../views/thequequiz.vue')
    },
    {
      path:'/createquizintro',
      name:'createquiz intro',
      component:Createquizintro
    }
  ]
})

export default router
