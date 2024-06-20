<script setup>
import { ref } from 'vue'

const dataList = ref([])

const newTitle = ref({})

function submitForm() {
    if (newTitle.value.title){
        dataList.value.push({ ...newTitle.value })
        newTitle.value = {}
    }else{
        alert('O campo não pode estar vazio')
    }
}
function deleteList(index){
    dataList.value.splice(index, 1)
}
</script>

<template>
    <div>
        <h1>Todo List</h1>
        <form @submit.prevent="submitForm">
            <input v-model="newTitle.title" placeholder="Digite o titulo">
            <textarea v-model="newTitle.description" placeholder="Digite a descrição" rows="5" cols="10"></textarea>
            <button type="submit">Criar Tarefa</button>
        </form>
        <ul>
            <li v-for="list, index in dataList" :key="index">
                {{ list.title }}
                <ul>
                    <li>
                        {{ list.description }}
                    </li>
                </ul>
                <button @click="deleteList(index)">X</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
input,
textarea,
button {
    background-color: transparent;
}
</style>
