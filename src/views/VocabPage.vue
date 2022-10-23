<template>
  <v-container>
    <h1 style="text-align: center">Речник</h1>
    <br />
    <article id="http-header">
      <h2>HTTP заглавка (header)</h2>
      <p>
        HTTP header е поле в HTTP заявка или отговор, което предава информация
        или метаданни за самата заявка или отговор (фиг.
        {{ http_header_figure_num }}).
      </p>
      <figure>
        <img
          src="../../media/http-headers.png"
          alt="sample http headers in client-server communication"
        />
        <figcaption>
          Фиг. {{ http_header_figure_num }} HTTP header-и под стрелките на
          комуникацията Client-Server
        </figcaption>
      </figure>
    </article>
    <br />
    <hr />
    <br />
    <article id="port">
      <h2>Порт (Port)</h2>
      <p>
        Мрежовият порт е софтуерна абстракция служеща за определяне на
        различните крайни точки на комуникационните канали в рамките на един
        хост. Номерът на порт винаги е свързан с IP адрес на хост и вида на
        транспортния протокол, използван за комуникация. Той допълва мрежовия
        адрес на местоназначението или източника на съобщение. Конкретни номера
        на портове са запазени за идентифициране на конкретни услуги, така че
        пристигащият пакет да може лесно да бъде препратен към работещо
        приложение. За тази цел номерата на портове, по-ниски от 1024,
        идентифицират исторически най-често използваните услуги и се наричат
        добре известни номера на портове. Портовете с по-високи номера са
        достъпни за обща употреба от приложения и са известни като ефемерни
        портове.
      </p>
    </article>
    <br />
    <hr />
    <br />
    <article id="origin">
      <h2>Произход (Origin)</h2>
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
        градивна единица на кода, изграждаща уеб страниците. Чрез тях се
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
      http_header_figure_num: 2,
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