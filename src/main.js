import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iView from "iview";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import "./my-theme/index.less";
import "iview/dist/styles/iview.css";

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(mavonEditor);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
