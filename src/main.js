import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import VueApexCharts from "vue3-apexcharts";
import "unfonts.css";
import "@/scss/style.scss";

import pinia from "./plugins/pinia";
import "./plugins/yup";
import "./plugins/axios";

const app = createApp(App);

app.use(vuetify).use(pinia).use(VueApexCharts).use(router).mount("#app");
