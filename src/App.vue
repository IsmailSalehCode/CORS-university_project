<template>
  <v-app>
    <!-- Menu -->
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
      <!-- Mobile Menu Btn -->
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon dark right @click="drawer = !drawer">
        </v-app-bar-nav-icon>
      </span>
      <!-- End of Mobile Menu Btn -->
    </v-app-bar>
    <!-- End of Menu -->
    <v-main>
      <router-view></router-view>
    </v-main>
    <!-- Mobile Menu -->
    <v-navigation-drawer
      app
      color="rgb(14, 14, 14)"
      v-model="drawer"
      dark
      right
      temporary
    >
      <v-list nav>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          link
        >
          <v-list-item-content :style="{ 'text-align': 'center' }">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- End of Mobile Menu -->
    <!-- Footer -->
    <v-footer bottom absolute app dark>
      <v-col cols="12">
        <v-row style="text-align: center">
          <v-col style="font-size: 0.9rem">
            &#169; {{ new Date().getFullYear() }} -
            <strong>Исмаил Салех</strong> от
            <a href="https://www.tu-sofia.bg/" target="_blank">ТY - София</a>.
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" style="padding-top: 0px">
        <hr />
      </v-col>
      <v-col cols="12">
        <v-row style="justify-content: center">
          <ul id="ico">
            <li
              v-for="social in socialMediaItems"
              :key="social.icon"
              style="padding-right: 20px"
            >
              <a
                :href="social.path"
                target="_blank"
                style="text-decoration: none"
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
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      menuItems: [
        {
          title: "Същност",
          path: "/",
        },
        {
          title: "Речник",
          path: "/vocabulary",
        },
        {
          title: "Уеб инспектор",
          path: "/web-inspector",
        },
      ],
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
  border-top: 3px solid white;
  border-bottom: 3px solid white;
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
  text-align: justify;
  text-justify: inter-word;
}
html {
  overflow-y: auto;
  scroll-behavior: smooth;
}
a {
  color: inherit !important;
}
</style>
