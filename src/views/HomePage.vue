<template>
  <v-container>
    <center>
      <h1 class="intro-heading">Cross-Origin Resource Sharing</h1>
    </center>
    <br />
    <p>
      &nbsp;Този проект има за цел да служи като учебно пособие по темата
      <b>Cross-Origin Resource Sharing</b> за студенти, бъдещи уеб програмисти,
      pentester-и и ентусиасти.
    </p>
    <p>
      &nbsp;С разрастващата се роля на онлайн услугите в световната търговия и
      всекидневния живот модерните сървъри имат нужда от възможността за
      изграждане на сигурни канали за комуникация с различни 'дестинации'.
      Легитимни причини за нуждата от CORS са: един или множество Front end-ове
      да могат да комуникират с един или множество Back end-ове, инкорпориране
      на шрифтове от
      <i>https://fonts.google.com</i>, позволяване на Google Analytics или
      MixPanel да събира аналитични данни за сайта ни, осъществяване на достъп
      за сайта ни до услугите на reCAPTCHA за борба срещу автоматизирани
      действия, целящи да компрометират уеб услугите ни, и т.н.
    </p>

    <br />
    <SiteTable />
    <br />
    <p>
      &nbsp;Термини, препращащи към дефиницията си в речника, изглеждат по
      следния начин:
      <router-link class="vocab-redirect" to="/">сложен-термин</router-link>. Не
      се притеснявайте от пренасочването, защото scroll позицията Ви се запазва
      => чрез браузър бутона за връщане назад може после да се върнете точно
      докъдето бяхте стигнали на миналата страница.
    </p>
    <br />
    <hr />
    <br />
    <InstallInstructions />
    <br />
    <hr />
    <br />
    <UsedSources />
  </v-container>
</template>

<script>
import SiteTable from "../components/SiteTable.vue";
import InstallInstructions from "../components/InstructionsInstall.vue";
import UsedSources from "../components/UsedSources.vue";

export default {
  components: { SiteTable, InstallInstructions, UsedSources },
};
</script>

<style scoped>
.intro-heading {
  margin: 30px 0px;
  border-top: 6px solid black;
  border-bottom: 6px solid black;
  width: fit-content;
  font-size: 3em;
  letter-spacing: 1px;
}
</style>