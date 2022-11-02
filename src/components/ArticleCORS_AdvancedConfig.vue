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
                <th>
                    Име на хедър
                </th>
                <th>
                    Примерна стойност
                </th>
                <th>
                    Описание
                </th>
                <th>
                    Употреба в прифлайт заявки
                </th>
                <th>
                    Употреба в прости заявки
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
                <th>
                    Име на хедър
                </th>
                <th>
                    Примерна стойност
                </th>
                <th>
                    Описание
                </th>
                <th>
                    Употреба в прифлайт заявки
                </th>
                <th>
                    Употреба в прости заявки
                </th>
            </tr>
            <tr>
                <td></td>
            </tr>
        </table>
    </p>
  </article>
</template>

<script>
export default {
  data() {
    return {
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
            "За предварителната заявка- разделен със запетаи списък, указващ какви хедъри ще изпрати оригиналната CORS заявка",
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