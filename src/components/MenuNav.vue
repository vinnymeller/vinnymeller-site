<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <div class="myName">
      <h1>Vinny</h1>
    </div>
    <div class="links">
      <RouterLink to="/about">About</RouterLink>
      <p class="divider">/</p>
      <RouterLink to="/projects">Projects</RouterLink>
      <p class="divider">/</p>
      <a href="https://blog.vinnymeller.com">Blog</a>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin: 0 auto;
}

.myName h1 {
  margin-bottom: 0;
}

.links {
  font-size: 1.5rem;
  margin: 0;
}
.links p {
  display: inline;
}

.links a {
  color: #333;
  text-decoration: none;
}

.links a:hover {
  color: #999;
  transition: 0.5s;
}

@media (min-width: 0px) {
  .myName {
    font-size: 5rem;
  }

  .links a {
    font-size: calc(1rem + 1vw);
    margin: 0 calc(1rem + 1vw);
  }

  .links p {
    font-size: calc(1.5rem + 0.75vw);
  }
}

@media (min-width: 436px) {
  .myName {
    font-size: calc(6rem + 4vw);
  }

  .links a {
    font-size: calc(2.5rem + 1vw);
    margin: 0 calc(1.5rem + 1vw);
  }

  .links p {
    font-size: calc(2.5rem + 1.25vw);
  }
}

@media (min-width: 720px) {
  .myName {
    font-size: calc(10rem + 4vw);
    margin: 0;
  }
}
</style>
