<template>
  <v-container>
    <br />
    <h1 style="text-align: center">Речник</h1>
    <br />
    <HttpHeaderArticle id="http-header" />
    <br />
    <hr />
    <br />
    <HttpStatusArticle id="http-status" />
    <br />
    <hr />
    <br />
    <PortArticle id="port" />
    <br />
    <hr />
    <br />
    <OriginArticle id="origin" />
    <br />
    <hr />
    <br />
    <HtmlArticle id="html" />
    <br />
    <hr />
    <br />
    <DevToolsArticle id="dev-tools" />
    <br />
    <hr />
    <br />
    <XhrArticle id="xhr" />
    <br />
    <hr />
    <br />
    <CsrfArticle id="csrf" />
  </v-container>
</template>

<script>
import DevToolsArticle from "../components/DevToolsArticle.vue";
import HttpHeaderArticle from "../components/HttpHeaderArticle.vue";
import HttpStatusArticle from "../components/HttpStatusArticle.vue";
import PortArticle from "../components/PortArticle.vue";
import OriginArticle from "../components/OriginArticle.vue";
import HtmlArticle from "../components/HtmlArticle.vue";
import XhrArticle from "../components/XhrArticle.vue";
import CsrfArticle from "../components/CsrfArticle.vue";

export default {
  components: {
    OriginArticle,
    PortArticle,
    DevToolsArticle,
    HttpHeaderArticle,
    HttpStatusArticle,
    HtmlArticle,
    XhrArticle,
    CsrfArticle,
  },
};
</script>