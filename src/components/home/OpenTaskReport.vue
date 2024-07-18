<script setup>
    import { useStore } from 'vuex'
    import { computed } from 'vue'

    
    const store = useStore()
    const openTask = computed(() => store.getters.openTask)
    const allTask = computed(() => store.getters.allTask)

    const percentageTask = computed(() => {
        if (allTask.value === 0) return 0 // Evitar divisão por zero
        return Math.round((openTask.value * 100) / allTask.value)
    })

</script>
<template>
    <v-card
        prepend-icon="mdi-clock-alert-outline"
        width="400"
    >
        <template v-slot:title>
            <v-card-item>
                <v-card-title>Tarefas em aberto</v-card-title>
            </v-card-item>
        </template>
        <v-card-text class="text-h2">
            <v-row>
                <v-col cols="6" class="text-center">{{ openTask }}</v-col>
                <v-col cols="6">
                    <div class="text-center">
                        <v-progress-circular :model-value="percentageTask" :rotate="360" :size="100" :width="15" color="teal" class="text-subtitle-1">
                            <template v-slot:default> {{ percentageTask }}% </template>
                        </v-progress-circular>
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
            <v-btn
                to="/task"
            >Ver todas as tarefas</v-btn>
        </v-card-actions>
    </v-card>
</template>