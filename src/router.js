import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/HomePage.vue";
import Vocab from "./views/VocabPage.vue";
import WebInspector from "./views/WebInspector.vue";
import ArticleCORS from "./views/ArticleCORS.vue";

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
    props: (route) => ({ word: route.query.w }),
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
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
