<template>
  <v-footer bottom absolute app dark>
    <v-col cols="12">
      <v-row style="text-align: center">
        <v-col style="font-size: 0.9rem">
          &#169; 2022 -
          <strong>Исмаил Салех</strong>, студент в
          <a href="https://www.tu-sofia.bg/" target="_blank"
            >Технически университет - София</a
          >
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
            <a :href="social.path" target="_blank" style="text-decoration: none"
              ><v-icon>{{ social.icon }}</v-icon></a
            >
          </li>
        </ul>
      </v-row>
    </v-col>
  </v-footer>
</template>

<script>
export default {
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
};
</script>

<style scoped>
ul#ico {
  display: inline-flex;
  list-style-type: none;
}
</style>