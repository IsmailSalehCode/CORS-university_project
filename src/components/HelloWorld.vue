<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field
          outlined
          style="max-width: 300px"
          @keydown.enter="submit"
          v-model.trim="url"
          label="Your URL"
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
      <v-col cols="12">
        <center>
          <h5 v-text="race_message"></h5>
        </center>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      timeout: 5000, //5 sec
      url: null,
      htmlData: null,
      urlImagesNum: 0,
      imgRegex: /<img.*\/>/g,
      race_message: null,
    };
  },
  // DONE zad 2; konsumirane na HTML; async koito vru6ta rezultat deto ne e void i da go vizualizirame; puska6 dva paralelni async Task-a; vtoriqt otbroqva vreme parallelno- rezultat koi e 1vi ; sledva6tiqt put pokazvam code-a, трябва да връща integer с броя изображения на уеб страницата
  //modul 2 lab 2 -> 20 okt fcst.bg ;

  methods: {
    async submit() {
      if (this.url != null) {
        // Call async functions in parallel
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
        Promise.race([
          this.startCounter(this.timeout),
          this.getPageAndCountImages(),
        ]).then((res) => {
          this.race_message = res;
          // alert(res);
        });
      } else {
        alert("No url submitted");
      }
    },
    async startCounter(timeout) {
      //https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
      return new Promise((resolve) => {
        setTimeout(resolve, timeout, "Your time is up!");
      });
    },
    async getPageAndCountImages() {
      let response = null;
      const targetURL = this.url;
      try {
        // http://192.168.56.1:3000
        // Using another local server, because of CORS protocol
        // URL with no images: http://www.webcode.me/
        response = await axios.get(targetURL);
        if (response.status == 200) {
          this.updateUI(response.data);
          return Promise.resolve("You didn't time out!");
        }
        // console.log(response);
      } catch (err) {
        alert(err.toString());
        return Promise.resolve("Network error");
        // console.error(err);
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
