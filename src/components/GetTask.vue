<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'

const store = useStore()
const dataList = computed(() => store.getters.dataList)
</script>

<template>
    <v-card
        max-width="900"
    >
        <v-list>
            <v-list-item
                v-for="item in dataList"
                :key="item.id"
            >
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</template>