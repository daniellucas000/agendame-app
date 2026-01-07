import { auth } from "./guards";

const MainRoutes = {
  path: "/",
  component: () => import("@/layouts/full/FullLayout.vue"),
  beforeEnter: auth,
  children: [
    {
      name: "dashboard",
      path: "/",
      component: () => import("@/views/dashboard/index.vue"),
    },
  ],
};

export default MainRoutes;
