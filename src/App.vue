<template>
  <v-app>
    <v-content
      oncontextmenu="return false"
      ondragstart="return false"
      onselectstart="return false"
    >
      <MusicPlayer />
      <router-view />
      <Scrollback />
    </v-content>
  </v-app>
</template>

<script>
import MusicPlayer from "@/components/MusicPlayer";
import Scrollback from "@/components/Scrollback";

export default {
  name: "App",
  components: {
    MusicPlayer,
    Scrollback
  }
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

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes moveUpDown {
  0%,
  100% {
    margin-top: 0;
  }
  50% {
    margin-top: 5px;
  }
}

.v-content {
  background-color: #e5e7e9;
  position: relative;
  display: flex;
  justify-content: center;
  background: url("./assets/tempBackground.jpg");
  background-size: 100%;

  a {
    color: white;
    text-decoration: none;
  }

  .v-card,
  .v-btn {
    animation: fadein 1.5s;
  }

  .v-card {
    font-family: "Noto Sans KR";
  }

  .link {
    animation: moveUpDown 2s linear infinite;
    font: {
      family: "scoredream";
      size: 1.2rem;
    }
    border-radius: 0px !important;
    height: 60px !important;
    padding: 0 60px !important;

    &.rotate1 {
      transform: rotate(4deg);
    }
    &.rotate2 {
      transform: rotate(-4deg);
    }
    &.rotate3 {
      transform: rotate(6deg);
    }
    &.rotate4 {
      transform: rotate(-6deg);
    }
  }
}
</style>
