<template>
  <button class="goBackBtn" @click="$router.go(-1)">← Върни се назад</button>
</template>

<style scoped>
.goBackBtn {
  border: black solid 1px;
  padding: 5px;
  border-radius: 5px;
}
</style>
