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
    <SiteFooter />
    <!-- End of Footer -->
  </v-app>
</template>

<script>
import SiteFooter from "./components/SiteFooter.vue";

export default {
  components: { SiteFooter },
  data() {
    return {
      drawer: false,
      menuItems: [
        {
          title: "Начало",
          path: "/",
        },
        {
          title: "Същност",
          path: "/main-doc",
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
.vocab-redirect {
  color: crimson !important;
}
</style>
