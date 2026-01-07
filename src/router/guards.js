import { useUserStore } from "@/stores/user";

export const auth = (to, from, next) => {
  const userStore = useUserStore();
  if (!userStore.isLoggedIn) {
    next({ name: "login" });
  }
  next();
};

export const redirectIfAuthenticated = (to, from, next) => {
  const userStore = useUserStore();

  if (userStore.isLoggedIn) {
    next({ name: "dashboard" });
  }
  next();
};
