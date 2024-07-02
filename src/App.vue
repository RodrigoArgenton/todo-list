<script setup>
import AppBar from './components/AppBar.vue'
import AddTask from './components/AddTask.vue'
import GetTask from './components/GetTask.vue'
</script>

<template>
  <v-app>
    <AppBar/>
    <v-main class="d-flex flex-column align-center ma-5">
      <AddTask></AddTask>
      <GetTask></GetTask>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
