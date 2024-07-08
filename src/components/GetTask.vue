<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'

const store = useStore()
const dataList = computed(() => store.getters.dataList)
</script>

<template>
    <v-card width="900">
        <v-list-item v-for="item in dataList" :key="item.id">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
            <div class="d-flex justify-end ">
                <v-btn prepend-icon="mdi-trash-can-outline" variant="plain" density="comfortable" size="small" class="ma-2">Excluir</v-btn>
                <v-btn prepend-icon="mdi-check" variant="tonal" density="comfortable" size="small" class="ma-2">Concluir</v-btn>
            </div>
            <v-divider></v-divider>
        </v-list-item>

    </v-card>
</template>