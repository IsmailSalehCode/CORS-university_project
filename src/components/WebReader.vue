<template>
  <v-row>
    <v-col>
      <v-text-field
        outlined
        style="max-width: 300px"
        @keydown.enter="submit"
        v-model.trim="url"
        label="Target URL"
        clearable
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-textarea
        clearable
        outlined
        label="HTML data"
        readonly
        v-model="htmlData"
      ></v-textarea>
    </v-col>
    <v-col cols="12">
      <h3>Number of images in your URL is...</h3>
      <h2 v-text="urlImagesNum"></h2>
    </v-col>
    <v-col cols="12" v-if="error == true">
      <v-alert border="left" elevation="3" type="error">
        Error occured. Press F12 to inspect console.
      </v-alert>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
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
        alert("No url submitted");
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
