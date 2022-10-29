<template>
  <article>
    <h2>Произход (Origin)</h2>
    <p>Нека вземем следния URL:</p>
    <p>
      <span class="protocol">https://</span>
      <span class="domain">instagram.com</span>
      <span class="port">:443</span>
      /ismails.2
    </p>
    <p>
      Origin/произходът се формира от използвания
      <span class="protocol">протокол</span> (напр. https://) +
      <span class="domain">домейн</span> (напр. instagram.com) +
      <span class="port">порт</span> (напр. 443- портът по подразбиране за https
      адреси). Следователно адреси като https://instagram.com/kleveontin,
      https://instagram.com/ismails.2, https://www.instagram.com/direct/inbox/
      имат един и същ произход.
    </p>
  </article>
</template>

<style scoped>
.protocol {
  border-bottom: orange solid 3px;
}

.domain {
  border-bottom: purple solid 3px;
}

.port {
  border-bottom: cyan solid 3px;
}
</style>