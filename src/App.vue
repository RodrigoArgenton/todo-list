<script setup>
import AppBar from './components/AppBar.vue'

</script>

<template>
  <v-app>
    <AppBar/>
    <v-main class="mt-5">
      <router-view/>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
