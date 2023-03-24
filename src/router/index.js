import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/top-5',
      name: 'top-5',
      component: () => import('@/views/Top5View.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogView.vue')
    },
    {
      path: '/blog/blog-post',
      name: 'blog-post',
      component: () => import('@/views/BlogPost.vue')
    },
  ]
})

export default router