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
        style="max-width: 950px"
        src="../../media/cross-origin-request-successful.png"
        alt="Successful cross-origin request"
      />
      <figcaption>
        Фиг. {{ cross_origin_request_successful_figure_num }} Успешна
        cross-origin заявка
      </figcaption>
    </figure>
  </article>
</template>

<script>
export default {
  data() {
    return {
      cross_origin_request_successful_figure_num: 1,
    };
  },
};
</script>

<style>
</style>