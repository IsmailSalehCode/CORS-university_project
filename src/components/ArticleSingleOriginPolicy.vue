<template>
  <article>
    <h2>Политика за единичен произход</h2>
    <p>
      От съображения за сигурност браузърите забраняват cross-origin HTTP
      заявките, инициирани от скриптове. Tази политика се назовава
      <i>same-origin policy</i>. Ако направим заявка до сървър без CORS
      конфигурацията, следното съобщение излиза на конзолата на браузъра на 8080
      (фиг. {{ default_sop_errors_figureNum }}):
    </p>
    <Figure
      :figureNum="default_sop_errors_figureNum"
      :imgData="default_sop_errors_figure"
      figureCaption="CORS грешка; таргетният
        сървър няма CORS headers => по подразбиране следва same-origin policy"
      altCaption="CORS errors from default Single-Origin Policy"
      maxWidthImg="900px"
    />
    <p>
      В конзолата на Chrome Dev Tools се извеждат две error съобщения. Първото
      е, че направената заявка (<code
        ><a class="vocab-redirect" href="/vocabulary?w=xhr"
          >XMLHttpRequestUpload</a
        ></code
      >) от източник http://localhost:8080 бе блокирана от CORS протокола на
      9gag, тъй като липсва Access-Control-Allow-Origin заглавка в отговора на
      сървъра. Второто error съобщение ни дава информация, че нашата GET заявка
      бе успешно получена ( =>
      <a class="vocab-redirect" href="/vocabulary?w=http-status"
        >HTTP код 200 ОК</a
      >), но отхвърлена от сървъра поради вече споменатите причини.
    </p>
    <!-- <p>
      Ръчно блокиране на външни скриптове да достъпват ресурсите на сървър с
      определен порт на localhost- в случая порт 3000 (фиг.
      {{ manual_sop_config_figureNum }}):
    </p>
    <Figure
      :figureNum="manual_sop_config_figureNum"
      :imgData="manual_sop_config_figure"
      figureCaption="Настройване сървъра на уеб
        галерията да следва same-origin policy, т.е само и единствено вътрешни
        скриптове да взаимодействат с route-овете на http://localhost:3000"
      altCaption="Manual setting of Single Origin Policy"
      maxWidthImg="500px"
    /> -->
  </article>
</template>

<script>
import Figure from "./FigureDialog.vue";

export default {
  components: { Figure },
  data() {
    return {
      default_sop_errors_figureNum: 4,
      default_sop_errors_figure: require("../../media/default-sop-errors.png"),
      // manual_sop_config_figureNum: 5,
      // manual_sop_config_figure: require("../../media/manual-sop-config.png"),
      // Manual sop is redundant
    };
  },
};
</script>

<style>
</style>