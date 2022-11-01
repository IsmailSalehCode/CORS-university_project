<template>
  <article>
    <h2>Типове CORS заявки</h2>
    <p>
      Има два типа CORS заявки: „прости“ (simple) и „пред полетни/
      предварителни/ прифлайт“ (preflight). Браузърът преценява кой тип заявка
      да използва. Полезно е програмистът да знае как браузърът взима това
      решение с цел оптимизация на производителността на натоварено уеб
      приложение, тъй като предварителните заявки са последвани от основните.
    </p>
    <br />
    <h3>Прости (simple)</h3>
    <p>
      Браузърът счита заявката за "проста", когато тя отговаря на определен
      набор от изисквания:
    </p>
    <ul>
      <li>
        Един от използваните методи е <code>GET</code>, <code>POST</code> или
        <code>HEAD</code>.
      </li>
      <li>
        <a
          href="https://fetch.spec.whatwg.org/#cors-safelisted-request-header"
          target="_blank"
          >CORS safe-listed</a
        >
        заглавка се използва:
        <code>Accept, Accept-Language, Content-Language, Content-Type</code>.
      </li>
      <li>
        Когато присъства заглавката Content-Type, са разрешени само следните
        стойности: <code>application/x-www-form-urlencoded</code>,
        <code>multipart/form-data</code> или <code>text/plain</code>.
      </li>
      <li>
        Не са регистрирани event listeners (слушатели на събития) в нито един
        <code>XMLHttpRequestUpload</code>
        обект
      </li>
      <li>Не се използва <code>ReadableStream</code> обект в заявката</li>
    </ul>
    <br />
    <h3>Предварителни (preflight)</h3>
    <p>
      Ако дадена заявка не отговаря на критериите за проста заявка, браузърът
      вместо това ще направи автоматична предварителна заявка с помощта на
      OPTIONS метода. Това повикване се прави с цел установяване на точните CORS
      възможности на сървъра, което от своя страна се използва за определяне
      дали предвиденият CORS протокол е разбран или не. Ако резултатът от
      извикването на OPTIONS диктува, че заявката не може да бъде направена,
      действителната заявка към сървъра няма да бъде изпълнена.
    </p>
    <Figure
      :figureNum="preflight_delete_figureNum"
      :imgData="preflight_delete_figure"
      figureCaption="Успешна Прифлайт заявка, последвана от главната DELETE заявка"
      altCaption="Successful Preflight request, followed by the main DELETE request"
      maxWidthImg="650px"
    />
    <br />
    <Figure
      :figureNum="preflight_2_figureNum"
      :imgData="preflight_2_figure"
      figureCaption="Успешна прифлайт заявка, наиме 10, последвана от главната заявка със същото име"
    />
    <br />
    <Figure
      :figureNum="preflight_failed_figureNum"
      :imgData="preflight_failed_figure"
      figureCaption="Успешна прифлайт заявка, наиме 11, която носи информация за отхвърлената главна заявка със същото име"
    />
  </article>
</template>

<script>
import Figure from "./FigureDialog.vue";

export default {
  components: { Figure },
  data() {
    return {
      preflight_delete_figureNum: 7,
      preflight_delete_figure: require("../../media/preflight-delete-cors.png"),
      preflight_2_figureNum: 8,
      preflight_2_figure: require("../../media/preflight-2.png"),
      preflight_failed_figureNum: 9,
      preflight_failed_figure: require("../../media/preflight-failed.png"),
    };
  },
};
</script>

<style>
</style>