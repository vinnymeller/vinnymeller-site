<script setup lang="ts">
import { RouterView } from "vue-router";
import CommonFooter from "@/components/CommonFooter.vue";
import Hamburger from "@/components/Hamburger.vue";
</script>

<template>
  <div id="hamburger">
    <Hamburger />
  </div>
  <router-view v-slot="{ Component, route }">
    <transition name="slide" mode="right">
      <component :is="Component" />
    </transition>
  </router-view>
  <div id="footer">
    <CommonFooter />
  </div>
</template>

<style>
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
  height: vh(15);
}

#navBar {
  display: inline-block;
}
#navBar a {
  margin: 1rem;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s, transform 0.4s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

@media (min-width: 0px) {
  html {
    font-size: 4px;
  }
}

@media (min-width: 320px) {
  html {
    font-size: 5px;
  }
}

@media (min-width: 480px) {
  html {
    font-size: 6px;
  }
}

@media (min-width: 600px) {
  html {
    font-size: 8px;
  }
}

@media (min-width: 720px) {
  html {
    font-size: 10px;
  }
}

@media (min-width: 840px) {
  html {
    font-size: 12px;
  }
}

@media (min-width: 1440px) {
  html {
    font-size: 14px;
  }
}

@media (min-width: 1920px) {
  html {
    font-size: 16px;
  }
}

@media (min-width: 2400px) {
  html {
    font-size: 18px;
  }
}

@media (min-width: 4000px) {
  html {
    font-size: 24px;
  }
}
</style>
