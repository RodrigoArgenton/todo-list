<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'

const store = useStore()
const dataList = computed(() => store.getters.dataList)

function deleteTask(index){
    store.dispatch('deleteTask', index)
}
function completeTask(index){
    store.dispatch('completeTask', index)
}
</script>
<template>
    <v-card width="900">
        <v-list-item v-for="item, index in dataList" :key="index" v-show="item.complete === true">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle v-show="item.description">{{ item.description }}</v-list-item-subtitle>
            <div class="d-flex justify-end">
                <v-btn 
                    prepend-icon="mdi-trash-can-outline" 
                    variant="plain" 
                    density="comfortable" 
                    size="small" 
                    class="ma-2"
                    @click="deleteTask(index)"
                >
                    Excluir
                </v-btn>
                <v-btn 
                    prepend-icon="mdi-check" 
                    variant="tonal" 
                    density="comfortable" 
                    size="small" 
                    class="ma-2"
                    @click="completeTask(index)"
                    >
                    Desfazer
                </v-btn>
            </div>
            <v-divider></v-divider>
        </v-list-item>
    </v-card>
</template>