<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex';

//inicia a chamada
const store = useStore()
const dataList = store.getters.dataList //recebe todas as task

const newTitle = ref({})

function addTask(){
    if(newTitle.value.title){
        store.dispatch('addTask', newTitle.value)
        newTitle.value = {}
    }else{
        alert('O campo titulo não pode estr em branco')
    }
}
function completeTask(index){
    store.dispatch('completeTask', index)
}
function deleteTask(index){
    store.dispatch('deleteTask', index)
}
</script>

<template>
    <div id="main">
        <h1>Todo List</h1>
        <form @submit.prevent="addTask" id="mainForm">
            <div class="coolinput">
                <label for="input" class="text">Titulo:</label>
                <input type="text" v-model="newTitle.title" placeholder="Digite o titulo" name="input" class="input">
            </div>
            <div class="coolinput">
                <label for="input" class="text">Descrição:</label>
                <input type="text" v-model="newTitle.description" placeholder="Digite a descrição" name="input" class="input">
            </div>
            <div class="btn">
                <button type="submit">Criar Tarefa</button>
            </div>
        </form>
        <hr>
        <ul class="mainList">
            <li v-for="(list, index) in dataList" :key="index" :class="['titleList', { complete: list.complete }]">
                {{ list.title }}
                <ul>
                    <li :class="['descriptionList', {complete: list.complete }]">
                        {{ list.description }}
                    </li>
                </ul>
                <div class="mainBtn">
                    <div class="listBtn">
                        <button @click="completeTask(index)">Concluir tarefa</button>
                    </div>
                    <div class="listBtn">
                        <button @click="deleteTask(index)">Excluir tarefa</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
#main{
    background-color: #333333;
    border: solid 1px #818CF8;
    border-radius: 10px;
    padding: 10px;
}
h1{
    color: #818CF8;
}
#mainForm{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}
.coolinput {
  display: flex;
  flex-direction: column;
  width: fit-content;
  position: static;
  width: 100%;
}

.coolinput label.text {
  font-size: 0.75rem;
  color: #818CF8;
  font-weight: 700;
  position: relative;
  top: 0.5rem;
  margin: 0 0 0 7px;
  padding: 0 3px;
  background: #333333;
  width: fit-content;
}

.coolinput input[type=text].input {
  padding: 11px 10px;
  font-size: 0.75rem;
  border: 2px #818CF8 solid;
  border-radius: 5px;
  background: #333333;
}

.coolinput input[type=text].input:focus {
  outline: none;
}
.btn button{
  margin: 15px;
  padding: 15px 30px;
  font-size: 18px;
  letter-spacing: 1px;
  color: #818CF8;
  background: transparent;
  cursor: pointer;
  border: 2px solid #818CF8;
  border-radius: 10px;
}
.mainList .titleList{
    margin-top: 20px;
    text-align: start;
    border: 1px solid white;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    text-align: justify;
}
ul .titleList{
    font-size: 1.8rem;
}
ul .descriptionList{
    font-size: 1rem;
}
ul .complete{
    text-decoration: line-through;
}
.mainBtn{
    display: flex;
    gap: 10px;
}
.listBtn button{
    padding: 5px 10px;
    border: 1px #818CF8 solid;
    border-radius: 10px;
    background-color: transparent;
    color: #818CF8;
}
</style>
