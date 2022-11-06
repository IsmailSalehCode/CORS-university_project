<template>
  <v-container>
    <v-col cols="12">
      <v-row style="justify-content: center">
        <v-sheet outlined rounded="lg" width="700px">
          <v-col>
            <v-text-field
              outlined
              style="max-width: 400px"
              @keydown.enter="submit"
              v-model.trim="url"
              label="Въведете URL и натиснете Enter"
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              clearable
              outlined
              label="HTML данни"
              readonly
              v-model="htmlData"
            ></v-textarea>
          </v-col>
          <v-col cols="12">
            <h3>Броят изображения в зададения URL е...</h3>
            <h2 v-text="urlImagesNum"></h2>
          </v-col>
          <v-col cols="12" v-if="error == true">
            <v-alert border="left" elevation="3" type="error">
              Възникна грешка. Натиснете F12 за инспекция на конзолата.
            </v-alert>
          </v-col>
        </v-sheet>
      </v-row>
    </v-col>
    <br />
    <v-col cols="12" style="width: fit-content">
      <RouteBackBtn />
    </v-col>
  </v-container>
</template>

<script>
import axios from "axios";
import RouteBackBtn from "../components/RouteBackBtn.vue";

export default {
  components: { RouteBackBtn },
  data() {
    return {
      url: null,
      htmlData: null,
      urlImagesNum: "-",
      imgRegex: /<img.*\/>/g,
      error: false,
    };
  },

  methods: {
    resetData() {
      this.error = false;
      this.htmlData = null;
      this.urlImagesNum = "-";
    },
    async submit() {
      // Reset
      this.resetData();
      // ===========
      if (this.url != null) {
        let response = null;
        const targetURL = this.url;
        try {
          // URL with no images: http://www.webcode.me/
          response = await axios.get(targetURL);
          if (response.status == 200) {
            this.updateUI(response.data);
          }
          // console.log(response);
        } catch (err) {
          this.error = true;
        }
      } else {
        alert("Не сте въвели URL");
      }
    },
    updateUI(data) {
      this.htmlData = data;
      const imgArray = data.match(this.imgRegex);
      imgArray == null
        ? (this.urlImagesNum = 0)
        : (this.urlImagesNum = imgArray.length);
    },
  },
};
</script>
