<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
function openDialog(){
    store.dispatch('popup')
}

const drawer = ref(false)
const items = [
    {
        title: 'Home',
        value: 'Home',
        'prepend-icon': 'mdi-home-outline',
    },
    {
        title: 'Adicionar Task',
        value: 'bar',
        'prepend-icon': 'mdi-file-edit-outline',
    },
    {
        title: 'Listar Tasks',
        value: 'fizz',
        'prepend-icon': 'mdi-list-box-outline',
    },
]
</script>
<template>
    <v-app-bar prominent>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Todo List</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item v-for="item, index in items" :key="index" :prepend-icon="item['prepend-icon']" @click="item.title === 'Adicionar Task' ? openDialog() : null">
            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>