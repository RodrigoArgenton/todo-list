<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const dataList = computed(() => store.getters.dataList)
const todayDate = new Date().toISOString().split('T')[0]

function deleteTask(index){
    store.dispatch('deleteTask', index)
}
function completeTask(index){
    store.dispatch('completeTask', index)
}
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString()
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
    <v-card width="900">
        <v-list-item v-for="item in dataList" :key="item.id" v-show="item.complete === false">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle v-show="item.description">{{ item.description }}</v-list-item-subtitle>
            <div class="d-flex justify-space-between">
                <div class="align-self-end">
                    <v-btn prepend-icon="mdi-calendar-month-outline" variant="plain" size="small" density="compact" :class="{dueDateClass: isDueDate(item.dueDate)}">
                    {{ formatDate(item.dueDate) }}
                    </v-btn>
                </div>
                <div class="d-flex justify-end">
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
                </div>
            </div>
            <v-divider></v-divider>
        </v-list-item>
    </v-card>
</template>
<style scoped>
.dueDateClass{
    color: red;
}
</style>