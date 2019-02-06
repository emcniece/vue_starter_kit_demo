import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import GridDemo from "@/components/GridDemo";

Vue.use(Router);

export default new Router({
  // mode: "history", // Removes pound character from URL
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/grid",
      name: "GridDemo",
      component: GridDemo
    }
  ]
});
