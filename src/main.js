import App from "./App.vue";
import axios from "axios";
import router from "./router";
import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import VueApexCharts from "vue3-apexcharts";
import "unfonts.css";
import "@/scss/style.scss";

import pinia from "./plugins/pinia";
import "./plugins/yup";
import "./plugins/axios";

import { useUserStore } from "./stores/user";

const app = createApp(App).use(pinia);

const userStore = useUserStore();

userStore.getUser().finally(() => {
  app.use(vuetify).use(VueApexCharts).use(router).mount("#app");
});
