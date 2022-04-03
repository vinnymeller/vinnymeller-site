<script setup lang="ts"></script>
<template>
  <div class="container">
    <a href="https://www.github.com/vinnymeller"
      ><font-awesome-icon :icon="['fab', 'github']" id="github"
    /></a>
    <a href="https://www.linkedin.com/in/vinnymeller"
      ><font-awesome-icon :icon="['fab', 'linkedin']" id="linkedin"
    /></a>
    <a href="https://www.youtube.com/vinnymeller"
      ><font-awesome-icon :icon="['fab', 'youtube-square']" id="youtube"
    /></a>
    <a href="https://www.twitch.tv/vinnymeller"
      ><font-awesome-icon :icon="['fab', 'twitch']" id="twitch"
    /></a>
    <a href="https://www.instagram.com/vinnymeller"
      ><font-awesome-icon :icon="['fab', 'instagram']" id="instagram"
    /></a>
    <a href="https://www.facebook.com/vinnymeller/"
      ><font-awesome-icon :icon="['fab', 'facebook']" id="facebook"
    /></a>
    <a href="https://www.twitter.com/bincman"
      ><font-awesome-icon :icon="['fab', 'twitter']" id="twitter"
    /></a>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

.container a {
  text-decoration: none;
}

#github:hover,
#linkedin:hover,
#youtube:hover,
#twitch:hover,
#instagram:hover,
#facebook:hover,
#twitter:hover {
  color: #aaa;
  transition: 0.5s;
}

#github {
  color: #000;
}

#linkedin {
  color: #2867b2;
}

#instagram {
  color: #517fa4;
}

#youtube {
  color: #bb0000;
}

#twitter {
  color: #00aced;
}

#facebook {
  color: #3b5998;
}

#twitch {
  color: #6441a4;
}

@media (min-width: 0px) {
  .container {
    margin-bottom: 1rem;
  }
  .container a {
    font-size: calc(2rem + 2vw);
    margin: 0 calc(1rem + 2vw);
  }
}

@media screen and (min-width: 1440px) {
  .container {
    margin-bottom: 1.5rem;
  }
  .container a {
    font-size: calc(3rem + 1vw);
    margin: 0 calc(2rem + 1vw);
  }
}
</style>
