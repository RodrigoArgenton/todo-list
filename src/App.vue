<script setup>
import mainTodoList from './view/home.vue'
</script>

<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> -
            <router-link to="/about">About</router-link> 
        </div>
        <router-view/>
    </div>
</template>

<style scoped>

</style>
