import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { mainPageRoutes } from '@/main-page'
import { musicRoutes } from '@/music'

const routes: RouteRecordRaw[] = [
  ...mainPageRoutes,
  ...musicRoutes,

  // unfamiliar path
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

export const router = createRouter({
  history: createWebHistory('/'),
  routes,
})
