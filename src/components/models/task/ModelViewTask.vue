<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { defineProps } from 'vue'

const store = useStore()
const todayDate = new Date().toISOString().split('T')[0]

const props = defineProps({
    dataList:{
        type: Array,
        Required: true
    },
})

function deleteTask(index){
    store.dispatch('deleteTask', index)
}
function completeTask(index){
    store.dispatch('completeTask', index)
}
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZone: 'UTC'
    })
}
function isDueDate(createdAt) {
    if (!createdAt) {
        return false
    }
    try {
        const taskDate = new Date(createdAt).toISOString().split('T')[0]
        return taskDate < todayDate
    } catch (error) {
        console.error('Invalid date:', createdAt)
        return false
    }
}
onMounted(() => {
  store.dispatch('fetchTask')
})
</script>

<template>
    <div class="d-flex justify-center">
        <v-container class="pa-0 ma-0">
            <v-row class="ma-0 pa-0">
                <v-col class="ma-2 pa-0">
                    <v-card class="w-100">
                        <v-list-item v-for="item in dataList" :key="item.id" >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                            <v-list-item-subtitle v-show="item.description">{{ item.description }}</v-list-item-subtitle>
                                <v-row class="ma-0">
                                    <v-col cols="12" md="6" class="pa-0">
                                        <v-btn 
                                            prepend-icon="mdi-calendar-month-outline" 
                                            variant="plain" 
                                            size="small" 
                                            density="compact" 
                                            :class="{dueDateClass: isDueDate(item.dueDate)}"
                                            class="pa-1"
                                        >
                                            {{ formatDate(item.dueDate) }}
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="12" md="6" class="d-flex justify-end">
                                        <v-btn 
                                            prepend-icon="mdi-trash-can-outline" 
                                            variant="plain" 
                                            density="comfortable" 
                                            size="small" 
                                            class="ma-2"
                                            @click="deleteTask(item.id)"
                                        >
                                            Excluir
                                        </v-btn>
                                        <v-btn 
                                            prepend-icon="mdi-check" 
                                            variant="tonal" 
                                            density="comfortable" 
                                            size="small" 
                                            class="ma-2"
                                            @click="completeTask(item.id)"
                                            >
                                            Concluir
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            <v-divider></v-divider>
                        </v-list-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<style scoped>
.dueDateClass{
    color: red;
}
</style>