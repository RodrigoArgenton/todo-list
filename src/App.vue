<script setup>
import AppBar from './components/AppBar.vue'
import AddTask from './components/AddTask.vue'

</script>

<template>
  <v-app>
    <AppBar/>
    <v-main id="mainContainer">
      <AddTask/>
    </v-main>
  </v-app>
</template>

<style scoped>
#mainContainer {
  background-color: black;
}
</style>
