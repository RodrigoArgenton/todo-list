<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ViewTask from '@/components/models/task/ModelViewTask.vue'

const store = useStore()
const dueTask = computed(() => store.getters.tasksDue)
</script>

<template>
    <ViewTask :dataList="dueTask"></ViewTask>
</template>
