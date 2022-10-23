<template>
  <v-container>
    <ArticleIntroCORS />

    <v-container>
      <WebReader />
    </v-container>
  </v-container>
</template>

<script>
import WebReader from "../components/WebReader.vue";
import ArticleIntroCORS from "../components/ArticeIntroCORS.vue";
export default {
  components: { WebReader, ArticleIntroCORS },
};
</script>

<style>
</style>