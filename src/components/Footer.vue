<template>
        <footer className="footer">
            <img src="@/assets/logoFooter.png" alt="Logo de l'entreprise Kasa" />
            <span>© {{dateSelectYear}} Kasa. All rights reserved</span>
        </footer>
</template>
<script setup lang="ts">
import { ref } from "vue"

const dateSelectYear = ref(new Date().getFullYear());

</script>


<style scoped>
footer {
    padding: 20px;
    margin-top: 60px;
    height: 150px;
    background-color: #000;
    display: grid;
    place-items: center;
}

footer > span {
    color: #fff;
    font-size: 24px;
}

@media screen and (min-width: 0px) and (max-width: 768px) {
    footer > span {
        font-size: 12px;
    }
}
</style>