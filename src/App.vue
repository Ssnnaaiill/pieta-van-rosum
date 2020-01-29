<template>
  <v-app>
    <v-content
      oncontextmenu="return false"
      ondragstart="return false"
      onselectstart="return false"
    >
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@font-face {
  font-family: "heiro";
  src: url("./assets/fonts/HeirofLightBold.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "scoredream";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-8Heavy.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

.v-content {
  background-color: #e5e7e9;
  position: relative;
  display: flex;
  justify-content: center;
  background: url("./assets/tempBackground.jpg");
  background-size: 100%;
}
</style>
