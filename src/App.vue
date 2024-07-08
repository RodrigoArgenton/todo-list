<script setup>
import AppBar from './components/AppBar.vue'
import AddTask from './components/AddTask.vue'
import GetTask from './components/GetTask.vue'
</script>

<template>
  <v-app>
    <AppBar/>
    <v-main class="d-flex flex-column align-center mt-5">
      <GetTask></GetTask>
      <AddTask></AddTask>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
