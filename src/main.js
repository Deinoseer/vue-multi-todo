import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Notifications from "vue-notification/src";
import { registerUikit } from "./globalComponents";
import "@/styles/common.scss";

Vue.config.productionTip = false;

Vue.use(Notifications);

registerUikit(Vue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
