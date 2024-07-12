<script setup>
    import OpenTaskReport from '../components/home/OpenTaskReport.vue'
    import CreatedTaskReport from '../components/home/CreatedTaskReport.vue'
    import ProductionTaskReport from '../components/home/ProductionTaskReport.vue'
    import TimelineTask from '../components/home/TimelineTask.vue'
</script>
<template>
    <div class="d-flex ga-2">
        <div>
            <OpenTaskReport/>
        </div>
        <div>
            <CreatedTaskReport/>
        </div>
        <div>
            <ProductionTaskReport/>
        </div>
    </div>
    <div class="d-flex justify-center pa-5">
        <TimelineTask/>
    </div>
</template>