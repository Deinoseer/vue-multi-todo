import Vue from "vue";
import VueRouter from "vue-router";
import Home from "Views/Home.vue";
import ViewTodo from "Views/viewTodo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/todo",
    component: ViewTodo
  }
];

const router = new VueRouter({
  base: process.env.NODE_ENV === "production" ? "/vue-todo" : "/",
  routes,
  mode: "history"
});

export default router;
