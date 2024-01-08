import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/artikel',
      name: 'artikel',
      component: () => import('@/views/ArticleListView.vue')
    },
    {
      path: '/detailArtikel/:id',
      name: 'detailArtikel',
      component: () => import('@/views/ArticleDetailView.vue')
    }
  ]
})

export default router
