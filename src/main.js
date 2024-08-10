import "./assets/css/main.css";

import SweetAlert from "./plugins/sweetalert.js";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(SweetAlert);

app.mount("#app");
