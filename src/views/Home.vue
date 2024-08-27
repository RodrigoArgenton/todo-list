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
    <!-- <div class="d-flex flex-wrap pa-5">
        <div class="d-flex flex-1-0 mr-2">
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
            <div>
                <ProductionTaskReport/>
            </div>
        </div>
    </div> -->
    <v-container>
        <v-row>
            <v-col cols="12" sm="12" lg="8">
                <TimelineTask/>
            </v-col>
            <v-col cols="12" lg="4" class="w-100">
              <v-col class="pa-0 pb-2">
                <ModelReport title="Tarefas em aberto" :subtitle="openTask" :progress="porcentageOpenTask" buttonMessage="Ver todas as tarefas em aberto"/>
              </v-col>
              <v-col class="pa-0">
                <ModelReport title="Tarefas vencendo hoje" :subtitle="tasksDueToday" :progress="porcentagetasksDueToday" buttonMessage="Ver todas as tarefas"/>
              </v-col>  
            </v-col>
        </v-row>
    </v-container>
</template>