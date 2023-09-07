<template>
        <main className="main">
            <div className="imgBanner">
                <p>
                    <span> Chez vous, </span>
                    <span>partout et ailleurs</span>
                </p>
            </div>
            <div v-if="isLoading">Chargement en cours...</div>
            <div v-else-if="error">Une erreur s'est produite : {{ error.message }}</div>
            <div v-else>
                <!-- <section class="homePage" > -->
                    <div  v-for="(item, index) in data" :key="index">

                        <Cards :data="item" :key="item.id" 
                                :id="item.id"
                                :title="item.title"
                                :cover="item.cover"
                                :pictures="item.pictures"
                                :description="item.description"
                                :host="item.host"
                                :rating="item.rating"
                                :location="item.location"
                                :equipments="item.equipments"
                                :tags="item.tags"
                            />
                    </div>
                <!-- </section> -->
            </div>
            <!-- <Cards :processData="processedData"/> -->
        </main>
</template>

<script setup lang="ts">
import Cards from "../components/Cards.vue";

import { onMounted, computed, ref } from 'vue';
import {useFetch} from '@/hooks/useFetch';
const url = '../data.json'

const { data, isLoading, error} = useFetch(url);
console.log("Avant")


const processedData = computed(() => {
  if (!data.value) return []
  // console.log(data.value) //ok recuperation 
  return data.value;
});

const myData = ref(null)

onMounted(async () => {
//   console.log("composant monté")
//     console.log(data.value);
    const { data, error } = useFetch(url);
  if (error.value) {
    console.error(error.value);
  } else if(data.value){
    myData.value = data.value;
  }

});

// const processedData = processData(data.value);






</script>






<!-- *******************-->
<style scoped>
main {
    margin: 0 100px;
}
.imgBanner {
    display: grid;
    place-items: center;
    height: 220px;
    border-radius: 25px;

    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url("@/assets/imgHome.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

.imgBanner > p {
    color: #fff;
    font-size: 45px;
    font-weight: 500;
}


.homePage {
    padding: 20px;
    margin: 50px 0;
    background-color: #f6f6f6;
    border-radius: 25px;

    display: flex;
    flex-flow: row wrap;
}

.homePage > .card {
    background-color: var(--colorPrimary);
    height: 340px;
    width: 340px;
    margin: 2%;
    border-radius: 10px;
    flex-grow: 1;
}

.homePage article {
    position: relative;
    display: flex;
    flex-flow: row;
    border-radius: 10px;
    z-index: 4;
}

.homePage article::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.15) 0%,
        rgba(0, 0, 0, 0.55) 100%
    );
    z-index: 3;
}

@media screen and (min-width: 0px) and (max-width: 768px) {
    .imgBanner {
        height: 110px;
        border-radius: 10px;
        background-position: 46% bottom;
        margin-bottom: 15px;
    }

    .imgBanner > p {
        padding: 15px 40px 15px 15px;
        font-size: 24px;
        font-weight: 500;
    }
    .imgBanner > p > span {
        display: block;
    }

    .homePage {
        padding: 0;
        margin: 0;
        background-color: #fff;
        border-radius: 25px;
    }

    .homePage > .card {
        margin: 2% 0;
    }

    .homePage > .card,
    .homePage article {
        height: 255px;
        width: 100%;
    }

    
}

</style>