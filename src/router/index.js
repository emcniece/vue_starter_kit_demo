import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Grid from "@/components/Grid";
import CarouselComponent from "@/components/Carousel";
import StyledComponents from "@/components/StyledComponents";
import Icon from "@/components/Icon";
import MapComponent from "@/components/MapComponent";

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
      name: "Grid",
      component: Grid
    },
    {
      path: "/carousel",
      name: "Carousel",
      component: CarouselComponent
    },
    {
      path: "/styled-components",
      name: "StyledComponents",
      component: StyledComponents
    },
    {
      path: "/icon",
      name: "Icon",
      component: Icon
    },
    {
      path: "/map",
      name: "Map",
      component: MapComponent
    }
  ]
});
