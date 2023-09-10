<template>
        <section class="homePage">
            <RouterLink :to="`/housing${id}`" 
            class="card"
            @click="choiceData"
       
            >
                <article>
                    <img
                        class="imgCard"
                        :src="cover"
                        :alt="title"
                    />
                    <p class="titleLocation">{{ title }}</p>
                </article>
            </RouterLink>
        </section>
</template>

<script setup lang="ts" >
// import { computed, ref } from 'vue';
//  type des données passées en prop
interface CardData {
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    description: string;
    host: {
        name: string;
        picture: string;
    };
    rating: string;
    location: string;
    equipments?: string[];
    tags: string[];
}

const props = defineProps<CardData>();
const currentData: CardData = props;

// const { data } = defineProps<{
//   data: CardData;
// }>();

const emits = defineEmits();
function choiceData(){
    // let data: CardData = currentData
    emits('card-clicked', currentData);
    return currentData;
}

</script>






<style scoped>
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

/* .homePage article:hover {
} */

article > .imgCard {
    position: relative;
    z-index: 2;
    height: 340px;
    width: 340px;
    border-radius: 10px;
    object-fit: cover;
    flex-grow: 1;
    z-index: 2;
}

article > .titleLocation {
    position: absolute;
    bottom: 30px;
    left: 15px;
    width: 180px;
    color: #fff;
    font-weight: 500;
    z-index: 4;
}

@media screen and (min-width: 0px) and (max-width: 430px) {
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

    article > .imgCard {
        height: 255px;
        width: 100%;
    }

    article > .titleLocation {
        font-size: 18px;
        font-weight: 400;
    }
}

@media screen and (min-width: 431px) and (max-width: 768px) {
    .homePage {
        padding: 0;
        margin: 0;
        background-color: #fff;
    }
}
</style>