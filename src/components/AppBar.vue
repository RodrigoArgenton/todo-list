<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const items = [
    {
        title: 'Home',
        value: 'Home',
    },
    {
        title: 'Adicionar Task',
        value: 'bar',
    },
    {
        title: 'Listar Tasks',
        value: 'fizz',
    },
]
</script>
<template>
    <v-app-bar prominent>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Todo List</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list :items="items"></v-list>
    </v-navigation-drawer>
</template>