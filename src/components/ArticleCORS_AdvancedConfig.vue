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
                    CORS Хедъри за Заявки
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
                <td>Origin</td>
                <td>https://www.mydomain.com</td>
                <td>Origin-а на отворения прозорец в браузъра</td>
                <td>Да</td>
                <td>Да</td>
            </tr>
            <tr>
                <td>
                  Access-Control-Request-Method  
                </td>
                <td>PATCH</td>
                <td>За предварителната заявка указва какъв метод ще използва оригиналната CORS заявка</td>
                <td>Да</td>
                <td>Не</td>
            </tr>
            <tr>
                <td>Access-Control-Request-Headers</td>
                <td>Authorization, X-PING</td>
                <td>За предварителната заявка, разделен със запетаи списък, указващ какви хедъри ще изпрати оригиналната CORS заявка</td>
                <td>Да</td>
                <td>Не</td>
            </tr>
        </table>
    </p>
    <p>
        <table>
             <tr>
                <th colspan="5" style="text-align:center">
                    <h3>
                    CORS Хедъри за Отговори
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
        </table>
    </p>
  </article>
</template>

<script>
export default {};
</script>

<style>
</style>