<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import AddTask from './AddTask.vue'

const store = useStore()
function openDialog(){
    store.dispatch('popup')
}

const drawer = ref(false)
const task = [
    ['Todas', '/task/AllTask', 'mdi-calendar-check-outline'],
    ['Vencendo', '/task/TodayTask', 'mdi-clock-alert-outline'],
    ['Atrasadas', '/task/DueTask', 'mdi-alert-box-outline'],
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
            <v-list-item prepend-icon="mdi-home-outline" title="Home" to="/"></v-list-item>
            <v-list-item prepend-icon="mdi-file-edit-outline" title="Adicionar tarefa" @click="openDialog"></v-list-item>
            <v-list-group value="Task" >
                <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        prepend-icon="mdi-list-box-outline"
                        title="Tarefas"
                    ></v-list-item>
                </template>
                <v-list-item
                    v-for="([title, path, icon], i) in task"
                    :key="i"
                    :title="title"
                    :value="title"
                    :to="path"
                    :prepend-icon="icon"
                ></v-list-item>
            </v-list-group>
            <v-list-item prepend-icon="mdi-check-all" title="Tarefas Completas" to="/completedtask"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>