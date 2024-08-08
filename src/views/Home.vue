<script setup>
    import { useStore } from 'vuex'
    import ProductionTaskReport from '../components/home/ProductionTaskReport.vue'
    import TimelineTask from '../components/home/TimelineTask.vue'
    import ModelReport from '../components/home/models/ModelReport.vue'
    import { computed } from 'vue'


    const store = useStore()
    const openTask = computed(() => store.getters.openTask)
    const allTask = computed(() => store.getters.allTask)
    const porcentageOpenTask = computed(() => {
        if(allTask.value == 0){
            return 0
        }
        return (openTask.value / allTask.value) * 100
    })
</script>
<template>
    <div class="d-flex ga-2">
        <div>
            <ModelReport title="Tarefas em aberto" :subtitle="openTask" :progress="porcentageOpenTask"/>
        </div>
        <div>
            <ModelReport title="Tarefas Criadas hoje" :subtitle="allTask" progress="100"/>
        </div>
        <div>
            <ProductionTaskReport/>
        </div>
    </div>
    <div class="d-flex justify-center pa-5">
        <TimelineTask/>
    </div>
</template>