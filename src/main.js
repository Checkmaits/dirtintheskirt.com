import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";

import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./assets/styles/_overrides.scss";
import "./assets/styles/_utilities.scss";

createApp(App).use(router).mount("#app");
