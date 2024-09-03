<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const dataList = computed(() => store.getters.dataList)
const todayDate = new Date().toISOString().split('T')[0]
const selected = ref([])

function isDueDate(createdAt) {
    if (!createdAt) {
        return false
    }
    try {
        const taskDate = new Date(createdAt).toISOString().split('T')[0]
        return taskDate === todayDate
    } catch (error) {
        console.error('Invalid date:', createdAt)
        return false
    }
}
async function deleteTask(index){
    for(let id of index){
        await store.dispatch('deleteTask', id)
    }
    return selected.value = []
}
async function completeTask(index){
    for(let id of index){
        await store.dispatch('completeTask', id)
    }
    return selected.value = []
}
</script>
<template>
    <v-card class="w-100">
        <v-container>
            <v-row class="d-flex justify-space-between">
                <v-col cols="6" sm="6">
                    <v-card-title class="text-h5">Hoje</v-card-title>
                </v-col>
                <!-- está coluna aparece somente em telas xs e sm -->
                <v-col sm="6" class="d-flex d-md-none justify-end">
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
                        </template>
                        <v-list>
                            <v-list-item>
                                <v-btn variant="text" @click="deleteTask(selected)">Excluir</v-btn> 
                                <v-btn variant="text" @click="completeTask(selected)">Concluir</v-btn>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-col>
                <!-- está coluna aparece somente para telas maiores que md -->
                <v-col cols="6" sm="4" xl="3" class="d-none d-md-flex align-center">
                    <v-row>
                        <v-col xs="12" sm="6" class="d-flex justify-end">
                            <v-btn variant="tonal" @click="deleteTask(selected)">Excluir</v-btn> 
                        </v-col>
                        <v-col xs="12" sm="6" class="d-flex justify-end">
                            <v-btn variant="tonal" @click="completeTask(selected)">Concluir</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <v-list lines="one" v-for="item in dataList" class="ma-4" v-show="isDueDate(item.dueDate) && item.complete == false">
            <div class="d-flex align-center">
                <div>
                    <v-checkbox-btn 
                    v-model="selected"
                    :value="item.id"
                    ></v-checkbox-btn>
                </div>
                <div>
                    <v-list-item>
                        <div>{{ item.title }}</div>
                    </v-list-item>
                </div>
            </div>
            <v-divider class="border-opacity-25"></v-divider>
        </v-list>
    </v-card>
</template>