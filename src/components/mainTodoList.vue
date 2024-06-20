<script setup>
import { ref } from 'vue'

const dataList = ref([]);

const newTitle = ref({ title: '' });

function submitForm() {
    dataList.value.push({ ...newTitle.value });
    newTitle.value.title = '';
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
            <li v-for="list in dataList" :key="list.title">{{ list.title }}</li>
        </ul>
    </div>
</template>

<style scoped>
input {
    background-color: transparent;
}
</style>
