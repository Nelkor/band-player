import '@src/main.scss'

import { createApp } from 'vue'

import { loadSoundsList } from '@/music/store'

import { router } from './router'
import App from './App.vue'

loadSoundsList().then()

createApp(App).use(router).mount('#app')
