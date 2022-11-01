import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/HomePage.vue";
import Vocab from "./views/VocabPage.vue";
import WebInspector from "./views/WebInspector.vue";
import ArticleCORS from "./views/ArticleCORS.vue";
import goTo from "vuetify/lib/services/goto";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/main-doc",
    component: ArticleCORS,
  },
  {
    path: "/vocabulary",
    component: Vocab,
  },
  {
    path: "/web-inspector",
    component: WebInspector,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    let scrollTo = 0;
    if (to.hash) {
      scrollTo = to.hash;
    }
    if (savedPosition) {
      scrollTo = savedPosition.y;
    }
    return goTo(scrollTo);
  },
});

export default router;
