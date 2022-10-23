<template>
  <article>
    <h1>Cross-Origin Resource Sharing</h1>
    <p>
      <b>Cross-Origin Resource Sharing</b> (<b>CORS</b> за накратко) е
      <a href="/vocabulary?w=http-header">HTTP header</a>-базиран механизъм,
      който позволява на един сървър да посочи дестинациите (<a
        href="/vocabulary?w=origin"
        >origins</a
      >), различни от своите, от които един клиентски браузър може да достъпва
      ресурсите му.
    </p>
    <p>
      Това споделяне на ресурси от различни източници се постига чрез
      <b>cross-origin</b> заявки (Фиг.
      {{ cross_origin_request_successful_figure_num }}).
    </p>
    <figure>
      <img
        style="max-width: 900px"
        src="../../media/cross-origin-request-successful.png"
        alt="Successful cross-origin request"
      />
      <figcaption>
        Фиг. {{ cross_origin_request_successful_figure_num }} Успешна
        cross-origin заявка
      </figcaption>
    </figure>
    <br />
    <p>
      На localhost:8080 е хоствано
      <v-btn outlined to="/web-inspector"> уеб приложение </v-btn>

      , което чете <a href="/vocabulary?w=html">HTML</a>-a и броя снимки на
      подадения URL в полето „Target URL“. Тук сме подали URL към уеб-галерия,
      съдържаща 4 снимки и хоствана на порт 3000. Тъй като в сървъра на
      localhost:3000 е подходящо конфигуриран CORS (фиг.
      {{ correctly_configured_cors_figure_num }}):
    </p>
  </article>
</template>

<script>
export default {
  data() {
    return {
      cross_origin_request_successful_figure_num: 1,
      correctly_configured_cors_figure_num: 3,
    };
  },
};
</script>

<style>
</style>