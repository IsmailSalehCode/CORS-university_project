<template>
  <table>
    <tr>
      <th colspan="4">
        <h3>Структура на сайта</h3>
      </th>
    </tr>
    <tr>
      <th v-for="name in columnNames" :key="name">
        {{ name }}
      </th>
    </tr>
    <tr v-for="page in pages" :key="page.name">
      <td class="text-center">{{ page.name }}</td>
      <td v-html="page.purpose"></td>
      <td v-html="page.content"></td>
      <td class="text-center">
        <router-link :to="page.link">{{ linkBtn }}</router-link>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      columnNames: [
        "Име на страницата",
        "Предназначение",
        "Съдържание",
        "Линк",
      ],
      pages: [
        {
          name: "Начало",
          purpose:
            "Въведение в проекта и разяснения по състава и структурата му.",
          content:
            "Въведение в темата, карта на сайта, инструкции за изтегляне и подкарване на уеб проекта и списък с използваните литературни източници.",
          link: "/",
        },
        {
          name: "Същност",
          purpose:
            "Какво означава CORS и за какъв проблем е създаден да решава? Демонстрация на примерна имплементация в Node сървър.",
          content:
            "CORS и SOP дефиниции, Node CORS имплементация, работа с уеб инспектора, CORS грешки, типове CORS заявки, всички CORS хедъри с предназначението им и примерни стойности.",
          link: "/main-doc",
        },
        {
          name: "Речник",
          purpose:
            "Добиване на обща представа за използваните научни термини при обясненията за CORS.",
          content:
            "Дефиниции за HTTP header, HTTP Status, Port, Origin, HTML, DevTools, XMLHttpRequest, Cross-Site Request Forgery",
          link: "/vocabulary",
        },
        {
          name: "Уеб инспектор",
          purpose:
            "Инвокиране на <code>GET</code> cross-origin заявки с цел изследване на промените в Network tab-а, намиращ се във вградените в браузъра инструменти за уеб разработчици.",
          content:
            "Уеб приложение, съставено от едно поле за въвеждане на URL, една read-only секция, която изобразява HTML-а на въведение URL след натискането на <kbd>Enter</kbd> и един брояч на <code>img</code> таговете в HTML-а. При възникнала грешка един <code>alert</code> става видим.",
          link: "/web-inspector",
        },
      ],
      linkBtn: "===",
    };
  },
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid black;
}
th {
  border: 2px solid black;
  padding: 5px;
}
td {
  border: 1px solid grey;
  text-align: justify;
  padding: 5px;
}
#center-text {
  text-align: center;
}
</style>