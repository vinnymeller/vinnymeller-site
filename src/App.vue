<script setup lang="ts">
import { RouterView } from "vue-router";
import CommonFooter from "@/components/CommonFooter.vue";
import Hamburger from "@/components/Hamburger.vue";
</script>

<template>
  <div id="hamburger">
    <Hamburger />
  </div>
  <RouterView />
  <div id="footer">
    <CommonFooter />
  </div>
</template>

<style>
html {
  font-size: 62.5%;
}

#app {
  width: vw(100);
  height: vh(100);
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#hamburger {
  position: fixed;
  top: 1rem;
  right: 1rem;
  height: vh(15);
}

#footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
