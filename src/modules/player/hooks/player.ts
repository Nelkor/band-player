import { ref, computed } from 'vue'

const audio = new Audio()
const audioUrl = ref<string>('')

audio.addEventListener('canplay', () => {
  audio.play().then()
})

export const isPlayerShown = computed(() => Boolean(audioUrl.value))

export const playAudio = (blob: Blob): void => {
  URL.revokeObjectURL(audioUrl.value)

  audioUrl.value = URL.createObjectURL(blob)

  audio.src = audioUrl.value
}

export const stopAudio = (): void => {
  audioUrl.value = ''

  URL.revokeObjectURL(audioUrl.value)

  audio.pause()
}
