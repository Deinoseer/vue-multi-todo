import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/todo",
    component: () => import("../views/viewTodo")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
