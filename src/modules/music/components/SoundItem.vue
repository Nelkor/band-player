<template>
  <div class="sound-item">
    <img :src="image" :alt="name" />

    <div class="sounds-info">
      <h2>{{ name }}</h2>
      <p class="date">{{ date }}</p>
    </div>

    <template v-if="isLoaded">
      <button @click="$emit('play')">Слушать</button>
    </template>

    <template v-else-if="isLoading">
      <span>Загружается...</span>
    </template>

    <template v-else>
      <button @click="$emit('download')">Загрузить</button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SoundItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
    isLoaded: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['download', 'play'],
}
</script>
