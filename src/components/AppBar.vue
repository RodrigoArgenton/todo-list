<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import AddTask from './AddTask.vue'

const store = useStore()
function openDialog(){
    store.dispatch('popup')
}

const drawer = ref(false)
const items = [
    {
        title: 'Home',
        'prepend-icon': 'mdi-home-outline',
        'to': '/'
    },
    {
        title: 'Adicionar Task',
        'prepend-icon': 'mdi-file-edit-outline',
    },
    {
        title: 'Listar Tasks',
        'prepend-icon': 'mdi-list-box-outline',
        'to': '/task'
    },
    {
        title: 'Task completas',
        'prepend-icon': 'mdi-check-all',
        'to': '/completedtask'
    },
]
</script>
<template>
    <v-app-bar prominent>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Todo List</v-toolbar-title>
      <AddTask/>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" permanent>
      <v-list>
        <v-list-item v-for="item, index in items" :key="index" :prepend-icon="item['prepend-icon']" @click="item.title === 'Adicionar Task' ? openDialog() : null" :to="item['to']" > <!--Estudar o pq o "to" não sobrepõe o click, uma vez que pode ser uma falha do sistema ou bug-->
            <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>