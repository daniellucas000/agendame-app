import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import VueApexCharts from "vue3-apexcharts";

import "unfonts.css";
import "@/scss/style.scss";

const app = createApp(App);

app.use(vuetify).use(VueApexCharts).use(router).mount("#app");
