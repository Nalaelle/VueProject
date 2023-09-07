
<template>
    <div id="layout">
        <Header />
    <div v-if="!isLoading">
    <ul>
      <li v-for="item in processedData" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
    </div>
    <div v-else>
      Chargement en cours...
    </div>
    <div v-if="error">
      Une erreur s'est produite : {{ error.message }}
    </div>
        <RouterView />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { onMounted, computed } from 'vue';
import {useFetch} from '@/hooks/useFetch';

const url = '../data.json'
// const url = '../infos.json'

const { data, isLoading, error} = useFetch(url);
console.log("Avant")


const processedData = computed(() => {
  if (!data.value) {
    return []; // Retourne un tableau vide si les données sont nulles
  }
  // console.log(data.value) //ok recuperation 

  return data.value;
});


onMounted(async () => {
  console.log("composant monté")
    console.log(data.value);
});

</script>

<style scoped>
</style>