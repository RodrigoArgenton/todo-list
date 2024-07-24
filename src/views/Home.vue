<script setup>
    import ProductionTaskReport from '../components/home/ProductionTaskReport.vue'
    import TimelineTask from '../components/home/TimelineTask.vue'
    import ModelReport from '../components/home/models/ModelReport.vue'
</script>
<template>
    <div class="d-flex ga-2">
        <div>
            <ModelReport title="Tarefas em aberto" subtitle="7" progress="50"/>
        </div>
        <div>
            <ModelReport title="Tarefas Criadas" subtitle="17" progress="89"/>
        </div>
        <div>
            <ProductionTaskReport/>
        </div>
    </div>
    <div class="d-flex justify-center pa-5">
        <TimelineTask/>
    </div>
</template>