<template>
  <v-container>
    <article>
      <h1>Cross-Origin Resource Sharing</h1>
      <p>
        <b>Cross-Origin Resource Sharing</b> (<b>CORS</b> за накратко) е
        <a class="vocab-redirect" href="/vocabulary?w=http-header"
          >HTTP header</a
        >-базиран механизъм, който позволява на един сървър да посочи
        дестинациите (<a class="vocab-redirect" href="/vocabulary?w=origin"
          >origins</a
        >), различни от своите, от които един клиентски браузър може да достъпва
        ресурсите му.
      </p>
      <p>
        Това споделяне на ресурси от различни източници се постига чрез
        <b>cross-origin</b> заявки (фиг.
        {{ cross_origin_request_successful_figureNum }}).
      </p>
      <Figure
        :figureNum="cross_origin_request_successful_figureNum"
        figureCaption="Успешна cross-origin заявка"
        :imgData="cross_origin_request_successful_figure"
        altCaption="Successful cross-origin request"
        maxWidthImg="900px"
      />
      <br />
      <p>
        На localhost:<a class="vocab-redirect" href="/vocabulary?w=port"
          >8080</a
        >
        е хоствано
        <a href="web-inspector" id="web-app-btn">уеб приложение</a>
        (горния десен прозорец), което чете
        <a class="vocab-redirect" href="/vocabulary?w=html">HTML</a>-a и броя
        снимки на подадения URL в полето „Target URL“. Тук сме подали URL към
        уеб-галерия, съдържаща 4 снимки и хоствана на
        <a class="vocab-redirect" href="/vocabulary?w=port">порт</a> 3000
        (долния десен прозорец). След натискането на <kbd>Enter</kbd>, read-only
        полето 'HTML data' се попълва с получения HTML и броячът за снимки от 0
        става на 4. Броят <code>&lt;img&gt;</code> елементи в подадения URL e 4.
      </p>
      <p>
        Големият Прозорец отляво, наиме '<a
          class="vocab-redirect"
          href="/vocabulary?w=dev-tools"
          >DevTools</a
        >
        - localhost8080' е зададен да изобразява Network активността на
        гореописаната операция. Документирано е, че от Origin localhost:8080
        успешно се инвокирал GET метод на Host с адрес localhost:3000 .
      </p>
      <p>
        Тъй като в сървъра на localhost:3000 е подходящо конфигуриран CORS (фиг.
        {{ correctly_configured_cors_figureNum }}), localhost:8080 има правото
        да инвокира GET метод на route ‘/’ на порт 3000.
      </p>
      <Figure
        :figureNum="correctly_configured_cors_figureNum"
        figureCaption="Подходящо конфигуриран
        CORS на Node сървър"
        :imgData="correctly_configured_cors_figure"
        altCaption="Properly configured CORS"
        maxWidthImg="800px"
      />
      <p>
        Ако в Response Headers от фиг.
        {{ cross_origin_request_successful_figureNum }} в
        Access-Control-Allow-Origin полето имаше звезда (*) след двоеточието, то
        това значи, че който и да е порт на localhost би могъл да достъпва този
        ресурс, а не само 8080. За да постигнем това с нашия Node сървър,
        изграден на Express фреймуърка, можем да подходим по два начина след
        като сме import-нали cors модула от папката node_modules в константа,
        наименувана cors (фиг. {{ correctly_configured_cors_figureNum }} – line
        3 | <code>const cors = require(“cors”);</code> ). Първият е с по-малко
        код <code>app.use(cors();)</code>, а вторият с малко повече
        <code>
          const corsOptions = { origin: "*"}; app.use(cors(corsOptions));</code
        >. И двата подхода гарантират всички routes на http://localhost:3000 да
        са достъпни от който и да е порт на localhost (фиг.
        {{ any_port_cors_figureNum }}).
      </p>
      <Figure
        :figureNum="any_port_cors_figureNum"
        :imgData="any_port_cors_figure"
        figureCaption="Този GET route на http://localhost:3000 е достъпен за всеки порт на localhost"
        altCaption="Access-Control-Allow-Origin: Any port (*)"
        maxWidthImg="650px"
      />
      <br />
      <hr />
      <br />
      <ArticleSOP />
      <br />
      <hr />
      <br />
      <ArticleCORSTypes />
    </article>
  </v-container>
</template>

<script>
import ArticleSOP from "../components/ArticleSingleOriginPolicy.vue";
import Figure from "../components/FigureDialog.vue";
import ArticleCORSTypes from "../components/ArticleCORS_Types.vue";

export default {
  components: { ArticleSOP, Figure, ArticleCORSTypes },
  data() {
    return {
      cross_origin_request_successful_figureNum: 1,
      cross_origin_request_successful_figure: require("../../media/cross-origin-request-successful.png"),
      correctly_configured_cors_figureNum: 3,
      correctly_configured_cors_figure: require("../../media/properly-configured-cors.png"),
      any_port_cors_figureNum: 3.5,
      any_port_cors_figure: require("../../media/any-port-wildcard.png"),
    };
  },
};
</script>

<style scoped>
#web-app-btn {
  font-weight: bold;
  color: black;
  border: black 2px solid;
  border-radius: 5px;
  padding: 4px;
  text-decoration: none;
}
</style>