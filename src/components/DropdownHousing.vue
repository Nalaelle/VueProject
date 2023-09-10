<template>
    <section>
        <div class="dropdownHouse" >
            <div class="strip">
                <h3 class="title">
                    Description
                </h3>
                <img
                    tabIndex={0}
                    role="button"
                    src="@/assets/arrowDropdown.svg"
                    alt="Flèche d'ouverture"
                    @click="reverse"
                    :class="arrowClassName"
                />
            </div>
            <ul v-if="dropdownValue" :class="`equipmentsValue containerTools`"
        >
            {{ description }}
        </ul>
        </div>
        <!--  -->
        <div class="dropdownHouse" >
            <div class="strip">
                <h3 class="title">
                    Équipements
                </h3>
                <img
                    tabIndex={0}
                    role="button"
                    src="@/assets/arrowDropdown.svg"
                    alt="Flèche d'ouverture"
                    @click="reverse"
                    :class="arrowClassName"
                />
            </div>
            <ul v-if="dropdownValue"
            :class="`equipmentsValue containerTools`"
            >
                <li
                v-for="(item, index) in equipments" :key="index"
                class="listTools">{{ item }}</li>
         
            </ul>
        </div>

  </section>

</template>

<script setup lang="ts">
import { ref } from 'vue';


const props = defineProps<DataDropdown>();
const { description, equipments } = props

const current: DataDropdown = props
interface DataDropdown {
    description: string,
    equipments: [string]
}


// Code Fonctionel
const dropdownValue = ref(true);
let arrowClassName = 'arrowClose' || 'arrowOpen';

function reverse(){
    dropdownValue.value = !dropdownValue.value;
    arrowClassName = dropdownValue.value ? 'arrowClose' : 'arrowOpen';
}


</script>









<!-- ******** -->

<style scoped>
section {
    margin: 50px 0 100px 0;
}
.dropdownRow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.dropdown {
    border-radius: 5px;
    margin: 20px 85px;
}
.dropdownHouse {
    border-radius: 5px;
    /* margin: 20px; */
    width: 48%;
}

.strip {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: var(--colorPrimary); */
    background-color: #ff6060;

    height: 45px;
    border-radius: 5px;
    padding: 5px 20px;
    position: relative;
}

.title {
    font-weight: 500;
    color: #fff;

    font-size: 25px;
    line-height: 35px;
    height: 45px;

    padding: 5px 0;
}

.arrowOpen,
.arrowClose {
    color: #fff;
    height: 15px;
    cursor: pointer;
}

.arrowOpen {
    transform: rotate(-180deg);
}

.arrowClose {
    transform: rotate(0deg);
}

/* ul */
.containerTools {
    display: flex;
    flex-direction: column;
}
/* li */
.listTools {
    width: 100%;
}
.dropdown > p,
.dropdown > ul,
.dropdownHouse > p,
.dropdownHouse > ul {
    display: flex;
    flex-direction: column;

    margin-top: -5px;
    background-color: #f6f6f6;
    border-radius: 0 0 6px 6px;
    padding: 20px;
    /* color: var(--colorPrimary); */
    color: #ff6060;
    line-height: 18px;
}
.dropdownHouse > p,
.dropdownHouse > ul {
    min-height: 200px;
}

/* .open  */
.close {
    display: none;
    overflow: hidden;
}

@media screen and (min-width: 0px) and (max-width: 768px) {
    section {
        margin: 0 0 100px 0;
    }

    .dropdown {
        border-radius: 5px;
        margin: 20px 0;
    }
    .dropdownRow {
        flex-direction: column;
    }
    .dropdownHouse {
        margin: 20px 0 20px 0;
        width: 100%;
    }
    .strip {
        height: 35px;
    }
    .strip > h3 {
        font-size: 16px;
    }

    .dropdownHouse > p,
    .dropdownHouse > ul {
        min-height: 150px;
        font-size: 15px;
    }
    .dropdown > p,
    .dropdown > ul {
        font-size: 13px;
    }
}
</style>