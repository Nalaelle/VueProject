<template>
        <header class="header">
            <img src="@/assets/kasa.png" alt="Logo de l'entreprise Kasa" />
            <nav class="containerNav">
              <ul>
                 <li><RouterLink to="/" class="link">Accueil</RouterLink></li>
                <li> <RouterLink to="/about" class="link">A propos</RouterLink></li>
              </ul>
            </nav>
        </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'


</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-decoration: none;
}

.header {
    height: 70px;
    margin: 40px 100px;
    display: flex;
    justify-content: space-between;
}

.header > img {
    max-width: 220px;
}
.containerNav {
    display: flex;
    align-items: center;
}

.router-link-exact-active,
.link {
    font-size: 24px;
    color: var(--colorPrimary);
    text-align: end;
    min-width: 140px;
    font-weight: 500;
}

.router-link-exact-active {
    text-decoration: underline;
}

@media screen and (min-width: 0px) and (max-width: 530px) {
    main {
        margin: 15px;
    }

    .header {
        height: 60px;
        margin: 20px 15px;
        align-items: center;
    }

    .header > img {
        width: 40%;
    }

    .containerNav {
        width: 60%;
        justify-content: flex-end;
    }

    .router-link-exact-active,
    .link {
        font-size: 14px;
        text-transform: uppercase;
        min-width: 89px;
    }
}

@media screen and (min-width: 531px) and (max-width: 992px) {
    main {
        margin: 20px;
    }

    .header {
        height: 70px;
        margin: 30px 20px 55px;
        align-items: center;
    }

    .header > img {
        width: 40%;
    }

    .containerNav {
        width: 50%;
        margin: 0;
        justify-content: flex-end;
    }

    .router-link-exact-active,
    .link {
        font-size: 20px;
        text-transform: uppercase;
    }
}

</style>
