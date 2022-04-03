import { createApp } from "vue";
import { createPinia } from "pinia";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutubeSquare,
  faTwitter,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faHouseChimney } from "@fortawesome/free-solid-svg-icons";

library.add(
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutubeSquare,
  faTwitter,
  faTwitch,
  faBars,
  faHouseChimney
);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
