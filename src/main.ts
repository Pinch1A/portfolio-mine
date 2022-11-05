import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import router from "./router";
import App from "./App.vue";
import "./assets/styles.css";

import portfolioData from "./assets/portfolio-info.json";

library.add(faLinkedin);
library.add(faGithub);
library.add(faInstagram);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.provide("portfolioData", portfolioData);

app.mount("#app");
