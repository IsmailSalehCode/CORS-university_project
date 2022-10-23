<template>
  <v-container>
    <h1 style="text-align: center">Речник</h1>
    <br />
    <article id="http-header">
      <h2>HTTP header</h2>
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
    <br />
    <hr />
    <br />
    <article id="origin">
      <h2>Origin</h2>
      <p>Нека вземем следния URL:</p>
      <p>
        <span class="protocol">https://</span>
        <span class="domain">instagram.com</span>
        <span class="port">:443</span>
        /ismails.2
      </p>
      <p>
        Origin/произходът се формира от използвания
        <span class="protocol">протокол</span> (напр. https://) +
        <span class="domain">домейн</span> (напр. instagram.com) +
        <span class="port">порт</span> (напр. 443- портът по подразбиране за
        https адреси). Следователно адреси като
        https://instagram.com/kleveontin, https://instagram.com/ismails.2,
        https://www.instagram.com/direct/inbox/ имат един и същ произход.
      </p>
    </article>
  </v-container>
</template>

<script>
export default {
  props: { word: String },
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
.protocol {
  border-bottom: orange solid 3px;
}

.domain {
  border-bottom: purple solid 3px;
}

.port {
  border-bottom: cyan solid 3px;
}

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