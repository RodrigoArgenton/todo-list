<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'


const store = useStore()
const dataList = computed(() => store.getters.dataList)
const todayDate = new Date().toISOString().split('T')[0]

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
</script>
<template>
    <v-card class="w-100">
        <div class="d-flex justify-space-between align-center ma-2">
            <div>
                <v-card-title class="text-h5">Hoje</v-card-title>
            </div>
            <div class="d-flex ga-2">
                <v-btn variant="tonal">Excluir</v-btn>
                <v-btn variant="tonal">Concluir</v-btn>
            </div>
        </div>
        <v-list lines="one" v-for="item in dataList" class="ma-4" v-show="isDueDate(item.dueDate)">
            <div class="d-flex align-center">
                <div>
                    <v-checkbox-btn v-model="item.id"></v-checkbox-btn>
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