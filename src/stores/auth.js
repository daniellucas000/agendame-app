import { defineStore } from "pinia";
import axios from "axios";
import { useUserStore } from "./user";

export const useAuthStore = defineStore("auth", {
  state: () => ({}),
  actions: {
    sanctum() {
      return axios.get("sanctum/csrf-cookie");
    },
    login(email, password) {
      return axios
        .post("api/login", {
          email,
          password,
        })
        .then((response) => {
          const userStore = useUserStore();
          userStore.user = response.data.data;
        });
    },
  },
  getters: {},
});
