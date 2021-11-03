<script setup>
import { isPlayerShown, stopAudio } from '../hooks/player'
</script>

<template>
  <div v-if="isPlayerShown" class="app-player">
    <button @click="stopAudio">Выключить</button>
  </div>
</template>
