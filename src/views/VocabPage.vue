<template>
  <v-container>
    {{ word }}
  </v-container>
</template>

<script>
export default {
  props: { word: String },
  data() {
    return {
      //   vocabItems: [
      //     {
      //       word: "HTTP header",
      //       definition:
      //         "HTTP header е поле в HTTP заявка или отговор, което предава информация или метаданни за самата заявка или отговор (фиг. 1).",
      //     },
      //   ], Not sure if this approach would be ideal cuz of text formatting in origin definition
    };
  },
};
</script>

<style>
</style>