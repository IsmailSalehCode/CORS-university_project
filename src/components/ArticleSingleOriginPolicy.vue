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
  </article>
</template>

<script>
export default {
  data() {
    return {
      default_sop_errors_figure_num: 4,
    };
  },
};
</script>

<style>
</style>