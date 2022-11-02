<template>
  <v-container>
    <v-col>
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
  </v-container>
</template>

<script>
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
        fetch(this.url)
          .then(function (response) {
            return response.text();
          })
          .then((html) => this.updateUI(html))
          .catch(
            // console.log(err);
            (this.error = true)
          );
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
