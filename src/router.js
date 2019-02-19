import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("@/views/login.vue")
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/home"),
      redirect: "/home/homeContent",
      children: [
        {
          path: "homeContent",
          name: "homeContent",
          component: () => import("@/views/home/homeContent")
        },
        {
          path: "articleDetail",
          name: "articleDetail",
          component: () => import("@/views/home/articleDetail.vue")
        }
      ]
    }
  ]
});
