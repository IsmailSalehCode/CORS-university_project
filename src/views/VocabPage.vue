<template>
  <v-container>
    <h1 style="text-align: center">Речник</h1>
    <br />
    <article id="http-header">
      <h2>HTTP заглавка (Header)</h2>
      <p>
        HTTP header е поле в HTTP заявка или отговор, което предава информация
        или метаданни за самата заявка или отговор (фиг.
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
    <br />
    <hr />
    <br />
    <article id="http-status">
      <h2>HTTP статус (Status)</h2>
      <p>
        Кодовете за състояние на HTTP отговор показват дали конкретна HTTP
        заявка е изпълнена успешно. Отговорите са групирани в пет класа според <a href="https://httpwg.org/specs/rfc9110.html#overview.of.status.codes">RFC9110</a> стандарта:
         <ol>
        <li>Информационни ( <code>100</code> - <code>199</code> )</li>
        <li>Успешни ( <code>200</code> - <code>299</code> )</li>
        <li>Съобщения за пренасочване( <code>300</code> - <code>399</code> )</li>
        <li>
          Клиентски отговори за грешки ( <code>400</code> - <code>499</code> )
        </li>
        <li>
          Отговори за грешка на сървъра ( <code>500</code> - <code>599</code> )
        </li>
      </ol>
      </p>
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
      <p>
        <a
          href="https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers"
          target="_blank"
          >Научи повече тук...</a
        >
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
    <article id="dev-tools">
      <h2>Инструменти за разработка (DevTools)</h2>
      <p>
        Всеки съвременен уеб браузър включва мощен пакет от инструменти за
        разработчици. Тези инструменти правят огромен набор от анализационни
        операции възможен като проверка на текущо заредените HTML, CSS и
        JavaScript, показване кои ресурси е поискала страницата,
        последователността и продължителността на зареждането им, как се
        използва паметта, съхранени данни в браузъра (local storage, session
        storage, cookies, cache), различни типове съобщения и т.н.
      </p>
      <p>
        За Google Chrome тези инструменти се назовават <i>Chrome Dev Tools</i>.
        Отварят се с натискане на <kbd>F12</kbd> или <kbd>Right Click</kbd> ->
        <kbd>Inspect</kbd>
      </p>
      <Figure
        :figureNum="dev_tools_figureNum"
        :imgData="dev_tools_figure"
        figureCaption="Писане и екзекутиране на елементарен код в браузъра (Google Chrome в случая)"
        altCaption="Writing and executing simple code in the browser"
        maxWidthImg="900px"
      />
      <p>
        Както се вижда на фигурата, има и други Tab-ове в най-горната лента
        (Elements, Sources, Network, Performance, Memory, etc...), които
        притежават различни инструменти за гореспоменатите цели.
      </p>
    </article>
  </v-container>
</template>

<script>
import Figure from "../components/FigureDialog.vue";

export default {
  props: { word: String },
  components: { Figure },
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
      http_header_figureNum: 2,
      http_header_figure: require("../../media/http-headers.png"),
      dev_tools_figureNum: 6,
      dev_tools_figure: require("../../media/dev-tools.png"),
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
</style>