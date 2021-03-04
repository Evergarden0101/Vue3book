import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/shiftCard.vue";

const routes = [{ path: "/home", component: Home }];

const router = new VueRouter({
  routes,
});

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
  ],
});
