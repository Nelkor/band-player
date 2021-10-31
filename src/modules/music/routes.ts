import { RouteRecordRaw } from 'vue-router'

import AppMusic from './components/AppMusic.vue'

export const musicRoutes: RouteRecordRaw[] = [
  {
    path: '/music',
    component: AppMusic,
  },
]
