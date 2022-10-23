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
      <v-col cols="12" sm="6">
        <v-row>
          <v-col style="font-size: 0.9rem">
            &#169; {{ new Date().getFullYear() }} -
            <strong>Исмаил Салех</strong> @
            <a href="https://www.tu-sofia.bg/" target="_blank">ТY - София</a>.
          </v-col>
        </v-row>
      </v-col>
      <v-divider class="d-none d-sm-block" vertical inset></v-divider>
      <v-col cols="12" sm="6">
        <v-row style="justify-content: end">
          <ul id="ico">
            <li
              v-for="social in socialMediaItems"
              :key="social.icon"
              style="padding-right: 20px"
            >
              <a :href="social.path" target="_blank"
                ><v-icon>{{ social.icon }}</v-icon></a
              >
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
  data() {
    return {
      socialMediaItems: [
        {
          icon: "mdi-github",
          path: "https://github.com/IsmailSalehCode",
        },
        {
          icon: "mdi-facebook",
          path: "https://www.facebook.com/ismail.saleh.921230",
        },
        {
          icon: "mdi-instagram",
          path: "https://www.instagram.com/ismails.2",
        },
        {
          icon: "mdi-gmail",
          path: "mailto:centriu78@gmail.com",
        },
      ],
    };
  },

  components: {
    HomePage,
  },

  methods: {
    redirectToMain() {
      this.$router.push("/").catch(() => {});
    },
  },
};
</script>

<style>
ul#ico {
  display: inline-flex;
  list-style-type: none;
}
#prTitle {
  color: white;
  border-top: 4px solid white;
  border-bottom: 4px solid white;
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
