<template>
  <v-container>
    <h1 style="text-align: center">Речник</h1>

    <article>
      <h2 id="http-header">HTTP header</h2>
      <p>
        HTTP header е поле в HTTP заявка или отговор, което предава информация
        или метаданни за самата заявка или отговор (фиг. 1).
      </p>
      <figure>
        <img
          src="../../media/http-headers.png"
          alt="sample http headers in client-server communication"
        />
        <figcaption>
          Фиг. 1 HTTP header-и под стрелките на комуникацията Client-Server
        </figcaption>
      </figure>
    </article>
  </v-container>
</template>

<script>
export default {
  props: { word: String },
  data() {
    return {
      //   vocabItems: [
      //     {
      //       word: "HTTP header",
      //       definition:
      //         "HTTP header е поле в HTTP заявка или отговор, което предава информация или метаданни за самата заявка или отговор (фиг. 1).",
      //     },
      //   ], Not sure if this approach would be ideal cuz of text formatting in origin definition
    };
  },
};
</script>

<style>
figcaption {
  border-top: 1px solid black;
}
figure {
  padding: 10px 15px 10px 15px;
  width: fit-content;
  outline-color: black;
  outline-width: 2px;
  outline-style: solid;
}
figcaption {
  font-style: italic;
}
</style>