<script setup lang="ts">
// import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import HomeView from './views/HomeView.vue'

</script>

<template>
  <div id="container">
    <h1>Hello de APP vue</h1>
    <!-- <Header/> -->
    <!-- <HomeView/> -->
        <!-- <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/housing:id">Housing</RouterLink> 
        </nav> -->
    <RouterView />
  </div>
</template>

<style scoped>

</style>
