// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueCarousel from "vue-carousel";
import Icon from "vue-awesome/components/Icon";

import Navigation from "@/components/Navigation";
import App from "./App";
import router from "./router";

Vue.use(BootstrapVue);
Vue.use(VueCarousel);

Vue.component("Navigation", Navigation);
Vue.component("v-icon", Icon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
