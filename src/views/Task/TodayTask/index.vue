<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ViewTask from '@/components/models/task/ModelViewTask.vue'

const store = useStore()
const tasksDueToday = computed(() => store.getters.tasksDueToday)
</script>

<template>
    <ViewTask :dataList="tasksDueToday"></ViewTask>
</template>
