<template>
  <!-- <table>
    <tr>
      <th style="background-color: black"></th>
      <th>{{ homeName }}</th>
      <th>Същност</th>
      <th>Речник</th>
      <th>Уеб инспектор</th>
    </tr>
    <tr>
      <th>Предназначение</th>
      <td>{{ homePurpose }}</td>
      <td>
        Какво означава CORS и за какъв проблем е създаден да решава?
        Демонстрация на примерна имплементация в Node сървър.
      </td>
      <td>Добиване на обща представа за използваните научни термини.</td>
      <td>
        Инвокиране на <code>GET</code> cross-origin заявки с цел изследване на
        промените в Network tab-а във вградените в браузъра инструменти за уеб
        разработчици.
      </td>
    </tr>
    <tr>
      <th>Съдържание</th>
      <td>{{ homeContent }}</td>
      <td></td>
      <td>Дефиниции на ...</td>
      <td>
        Уеб приложение, съставено от едно поле за въвеждане на URL, една
        read-only секция, която изобразява HTML-а на въведение URL след
        натискането на <kbd>Enter</kbd> и един брояч на
        <code>img</code> таговете в HTML-а. При възникнала грешка един
        <code>alert</code> става видим.
      </td>
    </tr>
    <tr>
      <th>Линк</th>
      <td id="center-text">
        <router-link :to="homeLink">{{ linkBtn }}</router-link>
      </td>
      <td id="center-text">
        <router-link to="/main-doc">{{ linkBtn }}</router-link>
      </td>
      <td id="center-text">
        <router-link to="/vocabulary">{{ linkBtn }}</router-link>
      </td>
      <td id="center-text">
        <router-link to="/web-inspector">{{ linkBtn }}</router-link>
      </td>
    </tr>
  </table> -->
  <table>
    <tr>
      <th v-for="name in columnNames" :key="name">
        {{ name }}
      </th>
    </tr>
    <tr v-for="page in pages" :key="page.name">
      <td class="text-center">{{ page.name }}</td>
      <td v-html="page.purpose"></td>
      <td>{{ page.content }}</td>
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
            "Въведение, карта на сайта и инструкции за теглене на проекта.",
          link: "/",
        },
        {
          name: "Същност",
          purpose:
            "Какво означава CORS и за какъв проблем е създаден да решава? Демонстрация на примерна имплементация в Node сървър.",
          content:
            "CORS и SOP дефиниции, Node CORS имплементация, типове CORS заявки, всички CORS хедъри",
          link: "/main-doc",
        },
        {
          name: "Речник",
          purpose: "Добиване на обща представа за използваните научни термини.",
          content: "",
          link: "/vocabulary",
        },
        {
          name: "Уеб инспектор",
          purpose:
            "Инвокиране на <code>GET</code> cross-origin заявки с цел изследване на промените в Network tab-а във вградените в браузъра инструменти за уеб разработчици.",
          content: "",
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