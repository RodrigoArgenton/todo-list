<script setup>
import { ref } from 'vue'

const dataList = ref([
    {description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illo voluptates obcaecati consequatur ea sequi assumenda at, repellendus culpa repudiandae odio corporis, sed cumque magni cupiditate. Eum eveniet porro voluptatum.", title:"teste"},
    {description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illo voluptates obcaecati consequatur ea sequi assumenda at, repellendus culpa repudiandae odio corporis, sed cumque magni cupiditate. Eum eveniet porro voluptatum.", title:"teste"},
    {description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illo voluptates obcaecati consequatur ea sequi assumenda at, repellendus culpa repudiandae odio corporis, sed cumque magni cupiditate. Eum eveniet porro voluptatum.", title:"teste"},
    {description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illo voluptates obcaecati consequatur ea sequi assumenda at, repellendus culpa repudiandae odio corporis, sed cumque magni cupiditate. Eum eveniet porro voluptatum.", title:"teste"},
    {description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illo voluptates obcaecati consequatur ea sequi assumenda at, repellendus culpa repudiandae odio corporis, sed cumque magni cupiditate. Eum eveniet porro voluptatum.", title:"teste"},
])

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
    <div id="main">
        <h1>Todo List</h1>
        <form @submit.prevent="submitForm" id="mainForm">
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
            <li class="titleList" v-for="list, index in dataList" :key="index">
                {{ list.title }}
                <ul>
                    <li class="descriptionList">
                        {{ list.description }}
                    </li>
                </ul>
                <div class="deleteBtn">
                    <button @click="deleteList(index)">Excluir task</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
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
.deleteBtn button{
    padding: 5px 10px;
    border: 1px #818CF8 solid;
    border-radius: 10px;
    background-color: transparent;
    color: #818CF8;
}
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
</style>
