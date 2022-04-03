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
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.container a {
  text-decoration: none;
  margin: 0 1rem;
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
</style>
