import { ref, computed } from 'vue'

import { getSounds } from '@/music/requests'
import { preloadImage } from '@/tools'

import { Sound } from './types'

const soundsList = ref<Sound[]>([])
const soundsReadyFlag = ref(false)
const soundsLoadErrorFlag = ref(false)

export const isSoundsReady = computed(() => soundsReadyFlag.value)

export const isSoundsFailed = computed(() => soundsLoadErrorFlag.value)

export const sounds = computed<Sound[]>(() => soundsList.value)

export const loadSoundsList = async (): Promise<void> => {
  try {
    soundsList.value = await getSounds()

    await Promise.all(soundsList.value.map(sound => preloadImage(sound.image)))

    soundsReadyFlag.value = true
  } catch (e) {
    soundsLoadErrorFlag.value = true
  }
}

export const downloadAudio = async (id: number): Promise<void> => {
  const sound = soundsList.value.find(sound => sound.id == id)

  if (!sound) {
    return
  }

  sound.isLoading = true

  const response = await fetch(sound.audio)

  sound.blob = await response.blob()
}
