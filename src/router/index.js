import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import World from "@/views/World";
import Schedule from "@/views/Schedule";
import Notice from "@/views/Notice";
import System from "@/views/System";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/world",
    name: "world",
    component: World
  },
  {
    path: "/schedule",
    name: "schedule",
    component: Schedule
  },
  {
    path: "/notice",
    name: "notice",
    component: Notice
  },
  {
    path: "/system",
    name: "system",
    component: System
  }
];

export default new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
