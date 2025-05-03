import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import SponsorView from "./views/SponsorView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/sponsor",
      name: "SponsorView",
      component: SponsorView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return to.hash ? { el: to.hash, behavior: "smooth" } : { top: 0, behavior: "smooth" };
  },
});

export default router;
