import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  actions: {
    getUser() {
      return axios.get("api/user").then((response) => {
        this.user = response.data.data;
        console.log(response);
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state?.user?.id,
  },
});
