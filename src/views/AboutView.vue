<template>
  <div class="about">
    <main className="main">
        <div className="imgBanner"></div>
        <Dropdown />
    </main>
</div>
</template>



<script setup lang="ts">
import Dropdown from "../components/DropdownAbout.vue";

</script>










<!-- *******************-->
<style scoped>
main {
    margin: 0 100px;
    min-height: 75vh;
}
.imgBanner {
    margin-bottom: 20px;

    display: grid;
    place-items: center;
    height: 220px;
    border-radius: 25px;

    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url("@/assets/imgAbout.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

@media screen and (min-width: 0px) and (max-width: 768px) {
    main {
        margin: 0;
    }
    .imgBanner {
        background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
            url("@/assets/imgAboutMobile.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 17% 31%;
        border-radius: 10px;
    }
}

</style>
