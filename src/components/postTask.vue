<script setup>
    import { ref } from 'vue'
    import { useStore } from 'vuex'
    const store = useStore()

    const newTitle = ref({})

    function addTask(){
        if(newTitle.value.title){
            store.dispatch('addTask', newTitle.value)
            newTitle.value = {}
        }else{
            alert('O campo titulo não pode estr em branco')
        }
    }

</script>
<template>
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
</template>
<style scoped>
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