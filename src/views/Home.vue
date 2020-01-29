<template>
  <div class="home">
    <div class="container">
      <div class="links">
        <v-btn dark depressed style="transform:rotate(6deg)" elevation="20">
          <router-link :to="'info'">✨전시회 소개</router-link>
        </v-btn>
        <v-btn dark depressed style="transform:rotate(-4deg)" elevation="20">
          <router-link :to="'schedule'">📅일정 안내</router-link>
        </v-btn>
        <v-btn dark depressed style="transform:rotate(4deg)" elevation="20">
          <router-link :to="'preview'">🎨관람 안내</router-link>
        </v-btn>
      </div>
      <v-card raised elevation="20">
        <div class="wrap">
          <h1>
            피에타
            <br />반로섬 <br />고별전
          </h1>
        </div>
      </v-card>
      <div class="links">
        <v-btn dark depressed style="transform:rotate(-6deg)" elevation="20"
          ><router-link :to="'ticket'">🎫예매하기</router-link></v-btn
        >
        <v-btn dark depressed style="transform:rotate(4deg)" elevation="20"
          ><router-link :to="'list'">🙋‍♀️관람객 명단</router-link></v-btn
        >
        <v-btn dark depressed style="transform:rotate(-4deg)" elevation="20"
          ><router-link :to="'help'">🌹고객센터</router-link></v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped lang="scss">
.wrap {
  background: url("../assets/meghan-schiereck--2eJaLtf_bI-unsplash.jpg")
    no-repeat center center;
  background-size: 100%;
  color: transparent;
  background-clip: text;
  h1 {
    text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    line-height: 100%;
    font: {
      family: "heiro", cursive;
      size: 6rem;
    }
    text-align: center;
  }
}

.container {
  margin-top: 5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .links {
    display: flex;
    flex-direction: column;

    .v-btn {
      font: {
        family: "scoredream";
        size: 1.2rem;
      }
      border-radius: 0px !important;
      margin: 10px -10px;
      height: 60px !important;
      padding: 0 60px !important;
      justify-content: center;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}

.v-card {
  z-index: 1;
  width: 450px;
  padding: 65px;
  background-color: rgba(255, 255, 255, 0) !important;
  background: url("../assets/steve-johnson-YS0YJLU_h2k-unsplash.jpg");
  background-size: 150%;
}
</style>
