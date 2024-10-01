<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ViewTask from '@/components/models/task/ModelViewTask.vue'

const store = useStore()
const allTask = computed(() => store.getters.allTask.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)))
</script>

<template>
    <ViewTask :dataList="allTask"></ViewTask>
</template>
