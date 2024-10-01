<script setup>
  import { useStore } from 'vuex'
  import TimelineTask from '../components/models/home/TimelineTask.vue'
  import ModelReport from '../components/models/ModelReport.vue'
  import { computed, onMounted } from 'vue'


  const store = useStore()
  const openTask = computed(() => store.getters.openTask)
  const allTask = computed(() => store.getters.allTask.length)
  const tasksDueToday = computed(() => store.getters.tasksDueToday.length)
  const tasksDueAll = computed(() => store.getters.tasksDueAll)

  function calcPorcentage(partialTaskCount, totalTaskCount){
    if(partialTaskCount === 0 || totalTaskCount === 0){
      return "0"
    }
    return computed(() => ((partialTaskCount / totalTaskCount) * 100).toFixed(0)).value
  }

  onMounted(() => {
      store.dispatch('fetchTask')
  })
</script>
<template>
  <v-container>
      <v-row>
          <v-col cols="12" sm="12" lg="8">
              <TimelineTask/>
          </v-col>
          <v-col cols="12" lg="4" class="w-100">
            <v-col class="pa-0 pb-2">
              <ModelReport title="Tarefas em aberto" :subtitle="openTask" :progress="calcPorcentage(openTask, allTask)" buttonMessage="Ver todas as tarefas em aberto" path="/task/AllTask"/>
            </v-col>
            <v-col class="pa-0 pb-2">
              <ModelReport title="Tarefas vencendo hoje" :subtitle="tasksDueToday" :progress="calcPorcentage(tasksDueToday, openTask)" buttonMessage="Ver todas as tarefas vencendo hoje" path="/task/TodayTask"/>
            </v-col>
            <v-col class="pa-0">
              <ModelReport title="Tarefas atrasadas" :subtitle="tasksDueAll" :progress="calcPorcentage(tasksDueAll, openTask)" buttonMessage="Ver todas as tarefas atrasadas" path="/task/DueTask"/>
            </v-col>  
          </v-col>
      </v-row>
  </v-container>
</template>