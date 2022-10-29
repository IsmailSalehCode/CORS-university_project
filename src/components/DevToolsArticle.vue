<template>
  <article>
    <h2>Инструменти за разработка (DevTools)</h2>
    <p>
      Всеки съвременен уеб браузър включва мощен пакет от инструменти за
      разработчици. Тези инструменти правят огромен набор от анализационни
      операции възможен като проверка на текущо заредените HTML, CSS и
      JavaScript, показване кои ресурси е поискала страницата,
      последователността и продължителността на зареждането им, как се използва
      паметта, съхранени данни в браузъра (local storage, session storage,
      cookies, cache), различни типове съобщения и т.н.
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
</template>

<script>
import Figure from "../components/FigureDialog.vue";

export default {
  components: { Figure },
  data() {
    return {
      dev_tools_figureNum: 6,
      dev_tools_figure: require("../../media/dev-tools.png"),
    };
  },
};
</script>

<style>
</style>