import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import GridDemo from "@/components/GridDemo";
import CarouselDemo from "@/components/CarouselDemo";
import StyledComponents from "@/components/StyledComponents";

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
    },
    {
      path: "/carousel",
      name: "CarouselDemo",
      component: CarouselDemo
    },
    {
      path: "/styled-components",
      name: "StyledComponents",
      component: StyledComponents
    }
  ]
});
