<template>
  <v-container>
    <figure>
      <img :src="imgData" :alt="altCaption" :style="maxWidthString" />
      <figcaption>Фиг. {{ figureNum }} {{ figureCaption }}</figcaption>
    </figure>
  </v-container>
</template>

<script>
export default {
  props: {
    figureNum: Number,
    figureCaption: String,
    imgData: String,
    altCaption: String,
    maxWidthImg: Number,
  },

  data() {
    return {
      maxWidthString: "max-width: " + this.maxWidthImg,
    };
  },
};
</script>

<style>
</style>