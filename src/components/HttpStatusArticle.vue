<template>
  <article>
    <h2>HTTP статус (Status)</h2>
    <p>
      Кодовете за състояние на HTTP отговор показват дали конкретна HTTP заявка
      е изпълнена успешно. Отговорите са групирани в пет класа според
      <a
        href="https://httpwg.org/specs/rfc9110.html#overview.of.status.codes"
        target="_blank"
        >RFC9110</a
      >
      стандарта:
    </p>
    <ol>
      <li>Информационни ( <code>100</code> - <code>199</code> )</li>
      <li>Успешни ( <code>200</code> - <code>299</code> )</li>
      <li>Съобщения за пренасочване( <code>300</code> - <code>399</code> )</li>
      <li>
        Клиентски отговори за грешки ( <code>400</code> - <code>499</code> )
      </li>
      <li>
        Отговори за грешка на сървъра ( <code>500</code> - <code>599</code> )
      </li>
    </ol>
  </article>
</template>