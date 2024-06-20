<script setup>
import { ref } from 'vue'

const dataList = ref([])

const newTitle = ref({ title: '' })

function submitForm() {
    dataList.value.push({ ...newTitle.value })
    newTitle.value.title = ''
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
            <button type="submit">Criar Tarefa</button>
        </form>
        <ul>
            <li v-for="list, index in dataList" :key="index">
                {{ list.title }}
                <button @click="deleteList(index)">X</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
input,
button {
    background-color: transparent;
}
</style>
