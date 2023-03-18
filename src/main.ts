import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faPaperPlane,
  faArrowsUpToLine,
  faEnvelopeOpen,
  faPassport,
  faIdCard,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import router from "./router";
import App from "./App.vue";
import "./assets/tailwind.css";
import VueScrollTo from "vue-scrollto";
import VueCodeHighlight from "vue-code-highlight";

import portfolioData from "./assets/portfolio-info.json";

library.add(faLinkedin);
library.add(faGithub);
library.add(faInstagram);

library.add(faIdCard);
library.add(faEnvelopeOpen);
library.add(faMedal);
library.add(faPassport);
library.add(faPaperPlane);
library.add(faArrowsUpToLine);

const app = createApp(App);

app.use(VueCodeHighlight); // registers the v-highlight directive
app.use(router);
app.use(VueScrollTo);
app.component("font-awesome-icon", FontAwesomeIcon);
app.provide("portfolioData", portfolioData);

app.mount("#app");
