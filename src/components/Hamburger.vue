<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="container">
    <RouterLink to="/"><font-awesome-icon icon="house-chimney" /></RouterLink>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-bottom: 0.5rem;
}

.container a {
  color: #000;
  text-decoration: none;
}

.container a:hover {
  color: #aaa;
  transform: scale(1.1);
  transition: 0.3s;
}

@media (min-width: 0px) {
  .container a {
    font-size: calc(3rem + 1vw);
  }
}
</style>
