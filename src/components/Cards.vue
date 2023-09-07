<template>
        <section className="homePage">
            <!-- {data.map((el) => (
                <RouterLink
                    key={el.id}
                    to={`housing/${el.id}`}
                    className={style.card}
                >
                    <article>
                        <img
                            className={style.imgCard}
                            src={el.cover}
                            alt={el.title}
                        />
                        <p className={style.titleLocation}>{el.title}</p>
                    </article>
                </RouterLink>
            ))} -->

            <RouterLink :to="`/housing:${el.id}`" className="card" >
                <article>
                    <img
                        className="imgCard"
                        :src="el.cover"
                        :alt="el.title"
                    />
                    <p className="titleLocation">{{ el.title }}</p>
                </article>
            </RouterLink>
            <!--  -->

            <article>
                <img className="imgCard" src="@/assets/logoVue.svg" alt="factice !" />
                <p className="titleLocation">Titre factice</p>
            </article>
        </section>
</template>

<script setup lang="ts">

//ecrire une variable qui correspond au template et la rendre dans le template
// à chaque appele des données

// resuperer id et l'envoyer dans l'url
// const modelCard = {""}

// Recuperation du props sous forme de tableau de donnée 

import a from '@/assets/imgHome.jpg'
const el = 
    {
        // cover: "../assets/logoVue.svg",
        cover: a,
        description: "string",
        equipments: ["string"],
        host: {
            name: "string",
            picture: "string",
        },
        id: "123",
        location: "string",
        pictures: ["string"],
        rating: "string",
        tags: ["string"],
        title: "Titre modif"
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