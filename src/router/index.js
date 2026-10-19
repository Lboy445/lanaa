import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/diary',
      name: 'diary',
      component: () => import('../views/DiaryView.vue'),
    },
    {
      path: '/diary/2020',
      name: 'diary-2020',
      component: () => import('../views/Diary2020View.vue'),
    },
    {
      path: '/diary/2021',
      name: 'diary-2021',
      component: () => import('../views/Diary2021View.vue'),
    },
    {
      path: '/diary/2022',
      name: 'diary-2022',
      component: () => import('../views/Diary2022View.vue'),
    },
    {
      path: '/diary/2023',
      name: 'diary-2023',
      component: () => import('../views/Diary2023View.vue'),
    },
    {
      path: '/diary/2024',
      name: 'diary-2024',
      component: () => import('../views/Diary2024View.vue'),
    },
    {
      path: '/diary/2025',
      name: 'diary-2025',
      component: () => import('../views/Diary2025View.vue'),
    },
    {
      path: '/diary/2026',
      name: 'diary-2026',
      component: () => import('../views/Diary2026View.vue'),
    },
    {
      path: '/hbd/2026',
      name: 'hbd-2026',
      component: () => import('../views/Hbd2026View.vue'),
    }
  ],
})

export default router
