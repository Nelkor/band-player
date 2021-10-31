<template>
  <AppHeader />
  <AppMain />
  <BandPlayer />
</template>

<script>
import { AppHeader, AppMain } from '@/layout'
import { BandPlayer } from '@/player'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    BandPlayer,
  },
}
</script>
