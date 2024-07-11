<script setup>
    const task = [
        { month: 'jan', amountTask: 1 },
        { month: 'fev', amountTask: 5 },
        { month: 'mar', amountTask: 2 },
        { month: 'abr', amountTask: 10 },
        { month: 'mai', amountTask: 7 },
        { month: 'jun', amountTask: 3 },
    ]
    const amountTasks = task.map(item => item.amountTask)
    const month = task.map(item => item.month)
</script>
<template>
    <v-card
        prepend-icon="mdi-clock-alert-outline"
        min-width="450"
    >
        <template v-slot:title>
            <v-card-item>
                <v-card-title>Escala de produção</v-card-title>
            </v-card-item>
        </template>
        <v-card-text class="text-h2">
            <v-sheet>
                <v-sparkline
                :labels="month"
                :model-value="amountTasks"
                color="rgba(255, 255, 255, .7)"
                height="100"
                stroke-linecap="round"
                >
                </v-sparkline>
            </v-sheet>
        </v-card-text>
    </v-card>
</template>