<template>
        <section class="carrousel">
            <img
                class="arrows arrowCarrouselLeft"
                src="@/assets/arrowDropdown.svg"
                alt=" fleche de direction précedente"
                @click="handleCountLeft"
            />
            <div class="imageCentral">
                <img
                    :src="pictures[x]"
                    alt="Photograpies de l'appartement"
                />
                <span class="counter">
                    {{ x }} / {{totalPictures}}
                </span>
            </div>
            <img
                class="arrows arrowCarrouselRight "
                @click="handleCountRight"
                src="@/assets/arrowDropdown.svg"
                alt=" fleche de direction suivante"
            />
        </section>

</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<DataCarrousel>();
const { pictures } = props

let x = ref(1);
const totalPictures = (pictures.length)-1
const current: DataCarrousel = props
interface DataCarrousel {
    pictures: [string]
}


function handleCountLeft() {
    if(x.value === 1) {
        x.value = totalPictures;
        return x.value
    }
    else {
        x.value --
        return x.value
    }
}

function handleCountRight() {
    if(x.value === totalPictures) {
        x.value = 1;
        return x.value
    }
    else {
        x.value ++
        return x.value
    }
}

</script>

<style scoped>
/* section */
.carrousel {
    height: 420px;
    width: 100%;
    border-radius: 25px;
    position: relative;
    margin-bottom: 45px;
}

.arrows {
    position: absolute;
    height: 50px;
    z-index: 2;
    top: 50%;
    bottom: 50%;
    cursor: pointer;
}
.arrowDisplayNone {
    display: none;
}
.arrowCarrouselLeft {
    transform: rotate(90deg) translate(-50%, -50%);
}

.arrowCarrouselRight {
    transform: rotate(-90deg) translate(50%, -50%);
    right: 0;
}

/* div */
.imageCentral {
    position: relative;
    height: 420px;
    width: 100%;
    border-radius: 25px;
}
/* img */

.imageCentral > img {
    height: 420px;
    width: 100%;
    border-radius: 25px;
    object-fit: cover;
}
/* span */
.counter {
    color: #fff;
    font-weight: 500;
    position: absolute;
    z-index: 3;
    bottom: 5px;
    left: 50%;
    font-size: 20px;
    transform: translate(-50%, -50%);
}

@media screen and (min-width: 0px) and (max-width: 430px) {
    .carrousel {
        height: 320px;
        margin-bottom: 15px;
    }
    .imageCentral,
    .imageCentral > img {
        height: 320px;
        border-radius: 10px;
    }
    .arrows {
        height: 20px;
    }
    .counter {
        display: none;
    }
}

@media screen and (min-width: 431px) and (max-width: 992px) {
    .carrousel {
        height: 330px;
        margin-bottom: 30px;
    }
    .arrows {
        height: 20px;
    }
    .imageCentral,
    .imageCentral > img {
        height: 330px;
    }
}
</style>