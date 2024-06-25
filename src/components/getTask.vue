<script setup>
    import { useStore } from 'vuex'

    //inicia a chamada
    const store = useStore()
    const dataList = store.getters.dataList //recebe todas as task

    function completeTask(index){
        store.dispatch('completeTask', index)
    }
    function deleteTask(index){
        store.dispatch('deleteTask', index)
    }
</script>
<template>
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