<template>
  <div>
    <figure>
      <img :src="imgData" :alt="altCaption" :style="maxWidthString" />
      <figcaption>Фиг. {{ figureNum }} | {{ figureCaption }}</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    figureNum: Number,
    figureCaption: String,
    imgData: String,
    altCaption: String,
    maxWidthImg: String,
  },

  data() {
    return {
      maxWidthString: "max-width: " + this.maxWidthImg,
    };
  },
};
</script>

<style>
figcaption {
  border-top: 1px solid black;
}
figure {
  padding: 10px 15px 10px 15px;
  width: fit-content;
  outline-color: black;
  outline-width: 2px;
  outline-style: solid;
}
figcaption {
  font-style: italic;
}
</style>