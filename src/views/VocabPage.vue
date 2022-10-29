<template>
  <v-container>
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
    <article id="html">
      <h2>HTML</h2>
      <p>
        <b>HyperText Markup Language</b> (<b>HTML</b> накратко) е основният
        маркиращ език за описание и дизайн на уеб страници. HTML е стандарт в
        интернет, а неговите стандарти се определят от международния консорциум
        W3C.
      </p>
      <p>
        Описанието на документа става чрез специални елементи, наречени HTML
        елементи или техните маркери, които се състоят от тагове и
        съответстващите етикети (HTML tags) и ъглови скоби (като например
        елемента <code>&lt;html&gt;</code>). HTML елементите са основната
        градивна единица на кода, изграждащ уеб страниците. Чрез тях се
        форматира, графично оформя текста и неговите отделните части в рамките
        на една уеб страница, като например заглавия, цитати, текстови раздели,
        хипертекстови препратки и т.н. Най-често HTML елементите са групирани по
        двойки <code>&lt;h1&gt;</code> и <code>&lt;/h1&gt;</code>.
      </p>
      <p>
        <a href="https://www.w3schools.com/html/default.asp" target="_blank"
          >Научи повече тук...</a
        >
      </p>
    </article>
    <br />
    <hr />
    <br />
    <DevToolsArticle id="dev-tools" />
  </v-container>
</template>

<script>
import DevToolsArticle from "../components/DevToolsArticle.vue";
import HttpHeaderArticle from "../components/HttpHeaderArticle.vue";
import HttpStatusArticle from "../components/HttpStatusArticle.vue";
import PortArticle from "../components/PortArticle.vue";
import OriginArticle from "../components/OriginArticle.vue";

export default {
  props: { word: String },
  components: {
    OriginArticle,
    PortArticle,
    DevToolsArticle,
    HttpHeaderArticle,
    HttpStatusArticle,
  },
  mounted() {
    if (this.word != null) {
      // console.log("called scroll");
      setTimeout(() => {
        const element = document.getElementById(this.word);
        element.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center",
        });
      }, 500);
    }
  },
  data() {
    return {};
  },
};
</script>