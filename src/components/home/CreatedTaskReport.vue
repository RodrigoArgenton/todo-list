<script setup>
const teste = 80
</script>
<template>
    <v-card
        prepend-icon="mdi-check-all"
        width="400"
    >
        <template v-slot:title>
            <v-card-item>
                <v-card-title>Tarefas criadas</v-card-title>
            </v-card-item>
        </template>
        <v-card-text class="text-h2">
            <v-row>
                <v-col cols="6" class="text-center">
                    10
                </v-col>
                <v-col cols="6">
                    <div class="text-center">
                        <v-progress-circular :model-value="teste" :rotate="360" :size="100" :width="15" color="teal" class="text-subtitle-1">
                            <template v-slot:default> {{ teste }}% </template>
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