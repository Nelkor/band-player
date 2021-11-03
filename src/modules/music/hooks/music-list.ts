import { computed } from 'vue'

import { formatDate } from '@/tools'
import { playAudio } from '@/player'

import { SoundView } from '../types'
import { isSoundsReady, isSoundsFailed, sounds } from '../store'

export const systemText = computed<string>(() => {
  if (isSoundsFailed.value) {
    return 'Ошибка при загрузке музыки!'
  }

  if (!isSoundsReady.value) {
    return 'Идёт загрузка музыки...'
  }

  return sounds.value.length ? '' : 'Ничего не найдено'
})

export const soundsList = computed<SoundView[]>(() => {
  const list = [...sounds.value]

  list.sort((a, b) => b.date - a.date)

  return list.map(sound => ({
    id: sound.id,
    name: sound.name,
    date: formatDate(sound.date),
    image: sound.image,
    isLoading: sound.isLoading,
    isLoaded: Boolean(sound.blob),
  }))
})

export const addAudioToPlayer = (id: number): void => {
  const sound = sounds.value.find(sound => sound.id == id)

  if (!sound || !sound.blob) {
    return
  }

  playAudio(sound.blob)
}
