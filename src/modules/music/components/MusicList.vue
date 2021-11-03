<template>
  <h2>{{ systemText }}</h2>

  <ul>
    <li
      v-for="{ id, name, image, date, isLoading, isLoaded } in soundsList"
      :key="id"
    >
      <SoundItem
        :name="name"
        :image="image"
        :date="date"
        :is-loading="isLoading"
        :is-loaded="isLoaded"
        @download="downloadAudio(id)"
        @play="addAudioToPlayer(id)"
      />
    </li>
  </ul>
</template>

<script>
import { systemText, soundsList, addAudioToPlayer } from '../hooks/music-list'
import { downloadAudio } from '../store'
import SoundItem from '../components/SoundItem.vue'

export default {
  name: 'MusicList',
  components: { SoundItem },
  setup() {
    return {
      systemText,
      soundsList,
      downloadAudio,
      addAudioToPlayer,
    }
  },
}
</script>
