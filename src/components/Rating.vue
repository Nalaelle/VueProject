<template>
        <div class="stars">
                    <span v-for="(item, index) in numRating" :key="index">
                        <svg
                            :width="ecartStar"
                            height="30"
                            :viewBox="sizeStar"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                                fill="#ff6060"
                            />
                        </svg>
                        
                    </span>

                    <span v-for="(item, index) in emptyStars" :key="index">
                        <svg
                            :width="ecartStar"
                            height="30"
                            :viewBox="sizeStar"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                                fill="#E3E3E3"
                            />
                        </svg>
                    </span>
        </div>  
</template>

<script setup lang="ts">

const props = defineProps<DataRating>();
const { rating } = props

const current: DataRating = props
interface DataRating {
    rating: string
}

// const starNumber = [1, 2, 3, 4, 5];

// const { windowSize } = useWindowSize();
let ecartStar = "50";
let sizeStar = "0 0 30 30 ";

// console.log("rating" + props.rating)
// console.log(typeof(props.rating))
const numRating = parseInt(rating)
const emptyStars = 5 - numRating;
// console.log("emptyStars : "+emptyStars)


// if (windowSize.width <= 768) {
//     sizeStar = "0 0 50 50 ";
//     ecartStar = "30";
// }



</script>













<style scoped></style>