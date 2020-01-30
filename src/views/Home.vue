<template>
  <div class="home">
    <div class="container">
      <div class="links">
        <router-link :to="'world'"
          ><v-btn class="link rotate3" dark depressed elevation="20">
            ✨전시회 소개
          </v-btn></router-link
        >
        <router-link :to="'schedule'"
          ><v-btn
            class="link rotate2"
            dark
            depressed
            elevation="20"
            style="padding: 0 70px !important;"
          >
            📅일정 안내
          </v-btn></router-link
        >
        <router-link :to="'notice'"
          ><v-btn
            class="link rotate1"
            dark
            depressed
            elevation="20"
            style="padding: 0 70px !important;"
          >
            🎨통합공지
          </v-btn></router-link
        >
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
        <router-link :to="'ticket'">
          <v-btn class="link rotate4" dark depressed elevation="20"
            >🎫신청 양식</v-btn
          ></router-link
        >
        <router-link :to="'list'">
          <v-btn
            class="link"
            dark
            depressed
            style="transform:rotate(4deg)"
            elevation="20"
            >🙋‍♀️관람객 명단
          </v-btn>
        </router-link>
        <v-btn
          class="link"
          dark
          depressed
          style="transform:rotate(-4deg)"
          elevation="20"
          href="http://asked.kr/p1eta1b"
          target="_blank"
        >
          🌹고객센터
        </v-btn>
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .links {
    display: flex;
    flex-direction: column;

    .v-btn {
      margin: 10px -10px;
      height: 60px !important;
      padding: 0 60px !important;
      justify-content: center;
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
