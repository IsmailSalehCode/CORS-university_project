<template>
  <table>
    <tr>
      <th></th>
      <th>Начало</th>
      <th>Същност</th>
      <th>Речник</th>
      <th>Уеб инспектор</th>
    </tr>
    <tr>
      <th>Предназначение</th>
      <td>Въведение в проекта и разяснения по състава и структурата му.</td>
      <td>
        Какво означава CORS и какъв проблем решава? Демонстрация на примерна
        имплементация в Node сървър.
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
      <td>Въведение, карта на сайта и инструкции за теглене на проекта.</td>
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
    </tr>
  </table>
</template>

<script>
export default {};
</script>

<style scoped>
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
</style>