<template>
  <article>
    <h2>Конфигурация</h2>
    <p>
      Вече видяхте няколко заглавки в предишните примери, които се използват за
      CORS, но има повече заглавки за по-фин контрол. По-долу е пълният списък с
      хедъри, които контролират CORS.
    </p>
    <p>
        <table>
            <tr>
                <th colspan="5" style="text-align:center">
                    <h3>
                    Хедъри на Заявки
                    </h3>
                </th>
            </tr>
            <tr>
                <th v-for="name in columnNames" :key="name">
                    {{name}}
                </th>
            </tr>
            <tr v-for="header in requestHeaders" :key="header.name">
                <td>{{header.name}}</td>
                <td>{{header.exampleValue}}</td>
                <td>{{header.descr}}</td>
                <td>{{header.usedInPreflight}}</td>
                <td>{{header.usedInSimple}}</td>
            </tr>
        </table>
    </p>
    <p>
        <table>
             <tr>
                <th colspan="5" style="text-align:center">
                    <h3>
                    Хедъри на Отговори
                    </h3>
                </th>
            </tr>
           <tr>
                <th v-for="name in columnNames" :key="name">
                    {{name}}
                </th>
            </tr>
            <tr v-for="header in responseHeaders" :key="header.name">
                <td>{{header.name}}</td>
                <td>{{header.exampleValue}}</td>
                <td>{{header.descr}}</td>
                <td>{{header.usedInPreflight}}</td>
                <td>{{header.usedInSimple}}</td>
            </tr>
        </table>
    </p>
  </article>
</template>

<script>
export default {
  data() {
    return {
      columnNames: [
        "Име на хедър",
        "Примерна стойност",
        "Описание",
        "Употреба в прифлайт заявки",
        "Употреба в прости заявки",
      ],
      requestHeaders: [
        {
          name: "Origin",
          exampleValue: "https://www.mydomain.com",
          descr: "Origin-а на отворения прозорец в браузъра",
          usedInPreflight: "Да",
          usedInSimple: "Да",
        },
        {
          name: "Access-Control-Request-Method",
          exampleValue: "PATCH",
          descr:
            "За предварителната заявка- указва какъв метод ще използва оригиналната CORS заявка",
          usedInPreflight: "Да",
          usedInSimple: "Не",
        },
        {
          name: "Access-Control-Request-Headers",
          exampleValue: "Authorization, X-PING",
          descr:
            "За предварителната заявка- разделен със запетаи списък, указващ какви хедъри ще изпрати оригиналната CORS заявка.",
          usedInPreflight: "Да",
          usedInSimple: "Не",
        },
      ],
      responseHeaders: [
        {
          name: "Access-Control-Allow-Origin",
          exampleValue: "https://www.mydomain.com",
          descr:
            "Разрешените origin-и за тази заявка, посочени от сървъра. Ако не съответства на заглавката на Origin и не е *, браузърът ще отхвърли заявката. Ако е указан домейн, компонентът на протокола е задължителен и може да бъде само един домейн.",
          usedInPreflight: "Да",
          usedInSimple: "Да",
        },
        {
          name: "Access-Control-Allow-Credentials",
          exampleValue: "true",
          descr:
            "Заявките на CORS обикновено не включват бисквитки. Когато е зададено на true, заявката може да бъде направена с/ще включва идентификационни данни като бисквитки.",
          usedInPreflight: "Да",
          usedInSimple: "Да",
        },
        {
          name: "Access-Control-Expose-Headers",
          exampleValue: "Date, X-Device-Id",
          descr:
            "Бял списък с допълнителни заглавки на отговор, които да бъдат изложени на раздела на браузъра извън заглавките по подразбиране",
          usedInPreflight: "Не",
          usedInSimple: "Да",
        },
        {
          name: "Access-Control-Max-Age",
          exampleValue: "600",
          descr:
            "Стойност в секунди за кеширане на резултатите от прифлайт заявката (т.е. данните в заглавките Access-Control-Allow-Headers и Access-Control-Allow-Methods).",
          usedInPreflight: "Да",
          usedInSimple: "Не",
        },
      ],
    };
  },
};
</script>

<style>
</style>