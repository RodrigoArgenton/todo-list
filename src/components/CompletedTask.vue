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
    <v-container>
        <v-row class="d-flex justify-center">
            <v-col cols="10">
                <v-card>
                    <v-list-item v-for="item, index in dataList" :key="index" v-show="item.complete === true">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        <v-list-item-subtitle v-show="item.description">{{ item.description }}</v-list-item-subtitle>
                        <v-row class="d-flex justify-end ma-1">
                            <v-col class="d-flex justify-center pa-0" sm="2">
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
                            </v-col>
                            <v-col class="d-flex justify-center pa-0" sm="2">
                                <v-btn 
                                    prepend-icon="mdi-check" 
                                    variant="tonal" 
                                    density="comfortable" 
                                    size="small" 
                                    class="ma-2"
                                    @click="completeTask(item.id)"
                                    >
                                    Desfazer
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>