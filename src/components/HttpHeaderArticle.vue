<template>
  <article>
    <h2>HTTP заглавка (Header)</h2>
    <p>
      HTTP header е поле в HTTP заявка или отговор, което предава информация или
      метаданни за самата заявка или отговор (фиг.
      {{ http_header_figureNum }}).
    </p>
    <Figure
      :figureNum="http_header_figureNum"
      :imgData="http_header_figure"
      figureCaption="HTTP header-и под стрелките на
          комуникацията Client-Server"
      altCaption="Sample http headers in client-server communication"
      maxWidthImg="auto"
    />
  </article>
</template>

<script>
import Figure from "../components/FigureDialog.vue";

export default {
  components: { Figure },
  data() {
    return {
      http_header_figureNum: 2,
      http_header_figure: require("../../media/http-headers.png"),
    };
  },
};
</script>

<style>
</style>