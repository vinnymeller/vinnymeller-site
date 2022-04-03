<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <div class="myName">
      <h1>Vinny</h1>
    </div>
    <div class="links">
      <RouterLink to="/">Home</RouterLink> /
      <RouterLink to="/about">About</RouterLink> /
      <RouterLink to="/blog">Blog</RouterLink> /
      <RouterLink to="/projects">Projects</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin: 0 auto;
}

.myName {
  font-size: 12rem;
  margin: 0;
}

.myName h1 {
  margin-bottom: 0;
}

.links {
  font-size: 1.5rem;
  margin: 0;
}

.links a {
  color: #333;
  font-size: 1.75rem;
  margin: 1rem;
  text-decoration: none;
}

.links a:hover {
  color: #999;
  transition: 0.5s;
}
</style>
