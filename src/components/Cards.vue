<script setup lang="ts">

</script>

<template>
        <section className={style.homePage}>
            "Hello world I'm a cards !!!"
            <!-- {data.map((el) => (
                <NavLink
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
                </NavLink>
            ))} -->
        </section>
</template>