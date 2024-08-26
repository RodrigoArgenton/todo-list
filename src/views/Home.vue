<script setup>
    import { useStore } from 'vuex'
    import ProductionTaskReport from '../components/home/ProductionTaskReport.vue'
    import TimelineTask from '../components/home/TimelineTask.vue'
    import ModelReport from '../components/home/models/ModelReport.vue'
    import { computed, onMounted } from 'vue'


    const store = useStore()
    const openTask = computed(() => store.getters.openTask)
    const allTask = computed(() => store.getters.allTask)
    const tasksDueToday = computed(() => store.getters.tasksDueToday)
    const porcentageOpenTask = computed(() => ((openTask.value / allTask.value) * 100).toFixed(0))
    const porcentagetasksDueToday = computed(() => ((tasksDueToday.value / allTask.value) * 100).toFixed(0))

    onMounted(() => {
        store.dispatch('fetchTask')
    })
</script>
<template>
    <div class="d-flex  pa-5">
        <div class="d-flex mr-2 w-100 m">
            <div class="w-100">
                <TimelineTask/>
            </div>
        </div>
        <div class="d-flex flex-column ga-2 w-25">
            <div>
                <ModelReport title="Tarefas em aberto" :subtitle="openTask" :progress="porcentageOpenTask" buttonMessage="Ver todas as tarefas em aberto"/>
            </div>
            <div>
                <ModelReport title="Tarefas vencendo hoje" :subtitle="tasksDueToday" :progress="porcentagetasksDueToday" buttonMessage="Ver todas as tarefas"/>
            </div>
            <!-- <div>
                <ProductionTaskReport/>
            </div> -->
        </div>
    </div>
</template>