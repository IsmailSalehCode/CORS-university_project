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
        style="max-width: 1000px"
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
      <a href="web-inspector">уеб приложение</a>
      (горния десен прозорец), което чете
      <a href="/vocabulary?w=html">HTML</a>-a и броя снимки на подадения URL в
      полето „Target URL“. Тук сме подали URL към уеб-галерия, съдържаща 4
      снимки и хоствана на порт 3000 (долния десен прозорец). След натискането
      на <kbd>Enter</kbd>, read-only полето 'HTML data' се попълва с получения
      HTML и броячът за снимки от 0 става на 4. Броят
      <code>&lt;img&gt;</code> елементи в подадения URL e 4.
    </p>
    <p>
      Големият Прозорец отляво, наиме 'DevTools - localhost8080' е зададен да
      изобразява Network активността на гореописаната операция. Документирано е,
      че от Origin localhost:8080 успешно се инвокирал GET метод на Host с адрес
      localhost:3000
    </p>
    <p>
      Тъй като в сървъра на localhost:3000 е подходящо конфигуриран CORS (фиг.
      {{ correctly_configured_cors_figure_num }}):
    </p>
    <figure>
      <img
        style="max-width: 1000px"
        src="../../media/properly-configured-cors.png"
        alt="Properly configured CORS"
      />
      <figcaption>
        Фиг. {{ correctly_configured_cors_figure_num }} Подходящо конфигуриран
        CORS на Node сървър
      </figcaption>
    </figure>
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