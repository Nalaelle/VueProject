<script setup lang="ts">
</script>

<template>
  <div className="error_main">
      <h1
          tabIndex={0}
          aria-label="ouppss, page non trouvée. Cliquez sur le bouton ci-dessous pour retourner à l'accueil"
      >
          404
      </h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <RouterLink to="/">
          <button>Retourner sur la page d'accueil</button>
      </RouterLink>
    </div>
</template>

<style scoped>
.error_main {
    min-height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--colorPrimary);
}

.error_main > h1 {
    font-size: 200px;
}

.error_main > p {
    margin: 20px;
    font-size: 36px;
    font-weight: 500;
}

.error_main button {
    margin: 100px;
    text-decoration: underline;
    color: var(--colorPrimary);
    line-height: 25px;
    font-size: 18px;
    border: none;
    background: transparent;
}

.error_main button:hover {
    cursor: pointer;
}

@media screen and (min-width: 0px) and (max-width: 430px) {
    .error_main > h1 {
        font-size: 105px;
    }
    .error_main > p {
        margin: 30px 50px;
        font-size: 18px;
        text-align: center;
    }
    .error_main button {
        font-size: 14px;
        margin: 20px;
    }
}

@media screen and (min-width: 431px) and (max-width: 992px) {
    .error_main > p {
        text-align: center;
    }
}
</style>