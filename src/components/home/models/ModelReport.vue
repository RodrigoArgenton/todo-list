<script setup>
    import {defineProps} from 'vue'

    const props = defineProps({
        title:{
            type: String,
            require: true
        },
        subtitle:{
            type: Number,
            require: true
        },
        progress:{
            type: String,
            require: true
        },
        buttonMessage:{
            type: String,
            require: true
        }
    })

</script>
<template>
    <v-card
        prepend-icon="mdi-check-all"
        width="400"
    >
        <template v-slot:title>
            <v-card-item>
                <v-card-title>{{ title }}</v-card-title>
            </v-card-item>
        </template>
        <v-card-text class="text-h2">
            <v-row>
                <v-col cols="6" class="text-center">
                    {{ subtitle }}
                </v-col>
                <v-col cols="6">
                    <div class="text-center">
                        <v-progress-circular :model-value="progress" :rotate="360" :size="100" :width="15" color="teal" class="text-subtitle-1">
                            <template v-slot:default> {{ progress }}% </template>
                        </v-progress-circular>
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
            <v-btn
                to="/task"
            >{{ buttonMessage }}</v-btn>
        </v-card-actions>
    </v-card>
</template>