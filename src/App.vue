<template>
  <v-app>
    <v-app-bar id="appBar" app>
      <v-toolbar-title @click="redirectToMain" class="pointerOnHover">
        <span id="prTitle"> CORS </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          color="white"
          text
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <HomePage />
    </v-main>
    <!-- Footer -->
    <v-footer bottom absolute app dark>
      <v-col cols="6">
        <v-row>
          <v-col style="font-size: 0.9rem">
            &#169; {{ new Date().getFullYear() }} -
            <strong>Исмаил Салех</strong>&nbsp;
            <a href="https://www.tu-sofia.bg/" target="_blank"
              >Технически университет - София</a
            >.
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row style="justify-content: end">
          <ul id="ico">
            <li style="padding-right: 20px">
              <a href="https://www.facebook.com/ismail.saleh.921230"
                ><v-icon>mdi-facebook</v-icon></a
              >
            </li>
            <li style="padding-right: 20px">
              <a href="https://www.instagram.com/ismails.2">
                <v-icon>mdi-instagram</v-icon>
              </a>
            </li>
            <li style="padding-right: 20px">
              <a href="mailto:centriu78@gmail.com">
                <v-icon>mdi-google</v-icon>
              </a>
            </li>
          </ul>
        </v-row>
      </v-col>
    </v-footer>
    <!-- End of Footer -->
  </v-app>
</template>

<script>
import HomePage from "./views/HomePage.vue";

export default {
  name: "App",

  components: {
    HomePage,
  },

  methods: {
    redirectToMain() {
      this.$router.push("/").catch(() => {});
    },
  },

  // data() {
  //   //
  // },
};
</script>

<style>
ul#ico {
  display: inline-flex;
  list-style-type: none;
}
#prTitle {
  color: white;
  outline-color: white;
  outline-width: 4px;
  outline-style: solid;
  letter-spacing: 5px;
}
#appBar {
  background-color: rgb(14, 14, 14);
}
.pointerOnHover :hover {
  cursor: pointer;
}
h1 {
  margin-bottom: 2rem;
  word-break: break-word;
}
p {
  margin: 1rem 0 2rem;
}
html {
  overflow-y: auto;
  scroll-behavior: smooth;
}
a {
  color: inherit !important;
  text-decoration: none;
}
</style>
