<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const isDialogOpen = computed(() => store.getters.isDialogOpen)
const selectedDate = ref(new Date())
const data = ref({
    complete: false,
    dueDate: selectedDate
})

function popup(){
  store.dispatch('popup')
}
function insertTask(){
    if(data.value.title){
        store.dispatch('insertTask', data.value)
        data.value = {
            complete: false,
            dueDate: selectedDate
        }
    }else{
        alert('O campo title é obrigatório!')
    }
}



</script>
<template>
    <v-dialog
    v-model="isDialogOpen"
    width="600px"
    >
        <v-card>
            <v-card-item>
            <div class="d-flex justify-center">
                <v-card-title class="mb-4" prepend-icon="">
                <v-icon icon="mdi-plus-circle-outline"></v-icon>
                Adicionar tarefa
                </v-card-title>
            </div>
            <v-form>
                <div>
                    <v-text-field label="Titulo" v-model="data.title" variant="underlined"></v-text-field>
                    <v-textarea label="Descrição" v-model="data.description" variant="underlined"></v-textarea>
                    <div>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                                <v-btn
                                    prepend-icon="mdi-calendar-clock"
                                    variant="outlined"
                                    v-bind="props"
                                >
                                Data de vencimento
                                </v-btn>
                            </template>
                            <v-date-picker 
                                v-model="selectedDate"
                            ></v-date-picker>
                        </v-menu>
                    </div>
                </div>
                <div class="d-flex justify-end gc-2">
                    <div>
                        <v-btn variant="text" @click="popup" >Cancelar</v-btn>
                    </div>
                    <div>
                        <v-btn variant="tonal" @click="insertTask()">Enviar</v-btn>
                    </div>
                </div>
            </v-form>
            </v-card-item>
        </v-card>
    </v-dialog>
</template>