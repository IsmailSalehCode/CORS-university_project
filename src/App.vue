<template>
  <v-app>
    <v-main>
      <HomePage />
    </v-main>
  </v-app>
</template>

<script>
import HomePage from "./views/HomePage.vue";

export default {
  name: "App",

  components: {
    HomePage,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
h1 {
  margin-bottom: 2rem;
  word-break: break-word;
}
p {
  margin: 1rem 0 2rem;
}
</style>
