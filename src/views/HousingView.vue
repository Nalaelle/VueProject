<template>
        <main key="Math.random()">
            <Carrousel :pictures="processedData.pictures" />
            <div key="Math.random()" class="infos">
                <article class="location">
                    <h1>{{ processedData.title }}</h1>
                    <p>{{ processedData.location }}</p>
                    <Tags :tags="processedData.tags" />
                </article>
                <article class="owner">
                    <div class="infosOwner">
                        <p>{{ processedData.host.name }}</p>
                        <img
                            :src="processedData.host.picture"
                            alt="Profil of Host"
                        />
                    </div>
                    <Rating :rating="processedData.rating" />
                </article>
            </div>
            <Dropdown :description="processedData.description"   :equipments="processedData.equipments"/>

        </main>
</template>

<script setup lang="ts">
import Dropdown from "../components/DropdownHousing.vue";
import Carrousel from "@/components/Carrousel.vue";
import Tags from "../components/Tags.vue";
import Rating from "../components/Rating.vue";
import { onMounted, computed, ref } from 'vue';
import {useFetch} from '@/hooks/useFetch';
const url = '../data.json'

const { data, isLoading, error} = useFetch<CardData>(url);
// console.log("Avant")
const props = defineProps({
    id: String
})
const {id } = props

interface CardData {
    id: string | number;
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
    equipments: string[];
    tags: string[];
}
const processedData = computed(() => {
  if (!data.value) return []

  for (let i in data.value){
    if(id == data.value[i].id){
        // console.log("ok")
        return data.value[i]
    }
  }
});


</script>








<!-- ****** -->

<style scoped >
.infos {
    display: flex;
    justify-content: space-between;
}

/* Location */

.location > h1 {
    font-weight: 500;
    font-size: 35px;
    line-height: 50px;
    color: var(--colorPrimary);
}

.location > p {
    color: var(--colorPrimary);
    margin-bottom: 10px;
}

.location > div {
    display: flex;
    flex-wrap: wrap;
}
.tag {
    display: inline-block;
    text-align: center;
    margin: 10px 15px 10px 0;
    border-radius: 10px;
    color: #fff;
    background-color: var(--colorPrimary);
    height: 25px;
    min-width: 115px;
    font-size: 14px;
    line-height: 25px;
    padding: 0 10px;
}

/* Owner  */

.owner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.infosOwner {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    align-items: center;
}

.infosOwner > p {
    color: var(--colorPrimary);
    font-size: 18px;
    text-align: end;
    margin-bottom: 15px;
    margin-right: 15px;
    width: 79px;
}

.infosOwner > img {
    border-radius: 50%;
    height: 67px;
    width: 67px;
    background-color: #c4c4c4;
    object-fit: cover;
}

.stars {
    margin-top: 10px;
    width: 250px;
}

@media screen and (min-width: 0px) and (max-width: 768px) {
    .infos {
        flex-direction: column;
    }
    /* Location */

    .location > h1 {
        font-size: 22px;
        line-height: 25px;
        margin-bottom: 6px;
    }

    .location > p {
        font-size: 15px;
    }

    .tag {
        font-size: 10px;
        line-height: 20px;
        border-radius: 5px;
        height: 21px;
        min-width: 85px;
    }

    /* Owner */

    .owner {
        flex-flow: row-reverse;
        justify-content: space-between;
        align-items: center;
    }

    .infosOwner {
        flex-direction: row;
        align-items: center;
        margin: 15px 0 15px 15px;
    }
    .infosOwner > p {
        margin-right: 15px;
        font-size: 14px;
        text-align: end;
    }
    .infosOwner > img {
        height: 62px;
        width: 62px;
    }

    .stars {
        margin-top: 10px;
        width: 200px;
    }
}

</style>