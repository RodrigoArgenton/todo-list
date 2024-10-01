<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ViewTask from '@/components/models/task/ModelViewTask.vue'

const store = useStore()
const CompletedTask = computed(() => store.getters.CompletedTask)
</script>

<template>
    <ViewTask :dataList="CompletedTask"></ViewTask>
</template>
