<template>
  <article>
    <h2>Политика за единичен произход</h2>
    <p>
      От съображения за сигурност браузърите забраняват cross-origin HTTP
      заявките, инициирани от скриптове. Tази политика се назовава
      <i>same-origin policy</i>. Ако направим заявка до сървър без CORS
      конфигурацията, следното съобщение излиза на конзолата на браузъра на 8080
      (фиг. {{ default_sop_errors_figure_num }}):
    </p>
    <figure>
      <img
        src="../../media/default-sop-errors.png"
        alt="CORS errors from default Single Origin Policy"
      />
      <figcaption>
        Фиг. {{ default_sop_errors_figure_num }} - CORS грешка; таргетният
        сървър няма CORS headers => по подразбиране следва same-origin policy
      </figcaption>
    </figure>
    <p>
      В конзолата на Chrome Dev Tools се извеждат две error съобщения. Първото
      е, че направената заявка (XMLHttpRequest) от източник
      http://localhost:8080 бе блокирана от CORS протокола, тъй като липсва
      Access-Control-Allow-Origin заглавка в отговора на сървъра. Второто error
      съобщение ни дава информация, че нашата GET заявка бе успешно получена (
      => код 200 ОК), но отхвърлена от сървъра поради вече споменатите причини.
    </p>
    <p>
      Ръчно блокиране на външни скриптове да достъпват ресурсите на сървър с
      определен порт на localhost- в случая порт 3000 (фиг.
      {{ manual_sop_config_figure_num }}):
    </p>
    <figure>
      <img
        style="max-width: 500px"
        src="../../media/manual-sop-config.png"
        alt="настройване сървъра на уеб галерията да следва same-origin policy, т.е само и единствено вътрешни скриптове да взаимодействат с route-овете на http://localhost:3000"
      />
      <figcaption>
        Фиг. {{ manual_sop_config_figure_num }}- настройване сървъра на уеб
        галерията да следва same-origin policy, т.е само и единствено вътрешни
        скриптове да взаимодействат с route-овете на http://localhost:3000
      </figcaption>
    </figure>
  </article>
</template>

<script>
export default {
  data() {
    return {
      default_sop_errors_figure_num: 4,
      manual_sop_config_figure_num: 5,
    };
  },
};
</script>

<style>
</style>