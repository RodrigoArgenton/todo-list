<script setup>
import AppBar from './components/AppBar.vue'

</script>

<template>
  <v-app>
    <AppBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
