<script setup>
import { computed, ref } from 'vue';
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
        <div class="d-flex justify-space-between align-center ma-2">
            <div>
                <v-card-title class="text-h5">Hoje</v-card-title>
            </div>
            <div class="d-flex ga-2">
                <v-btn variant="tonal" @click="deleteTask(selected)">Excluir</v-btn>
                <v-btn variant="tonal" @click="completeTask(selected)">Concluir</v-btn>
            </div>
        </div>
        <v-list lines="one" v-for="item in dataList" class="ma-4" v-show="isDueDate(item.dueDate) && item.complete == false">
            <div class="d-flex align-center">
                <div>
                    <v-checkbox-btn 
                    v-model="selected"
                    :value="item.id"
                    ></v-checkbox-btn>
                </div>
                <div>
                    <v-list-item
                        :title="item.title"
                    ></v-list-item>
                </div>
            </div>
            <v-divider class="border-opacity-25"></v-divider>
        </v-list>
    </v-card>
</template>