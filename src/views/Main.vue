<template>
  <v-container>
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
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      url: null,
      htmlData: null,
      urlImagesNum: 0,
      imgRegex: /<img.*\/>/g,
    };
  },

  methods: {
    async submit() {
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
          alert(err.toString());
          // console.error(err);
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
