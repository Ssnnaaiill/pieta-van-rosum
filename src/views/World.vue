<template>
  <div>
    <ToHome />
    <div class="world">
      <v-card raised elevation="15">
        <v-card-title><h1>✨세계관</h1></v-card-title>
        <v-alert type="error" color="pink" elevation="12">
          <strong>
            커뮤니티 운영 중 묘사되는 모든 배경, 인물, 사건 등은 허구입니다.
            이에 거부감을 느끼시거나, 과도하게 몰입하실 경우 커뮤니티 참여를
            재고해 주시기 바랍니다.
          </strong>
        </v-alert>
        <div class="paragraph">
          <h3>
            <strong>
              라벤더를 사랑하고 개미 관찰을 즐기던 아가씨.
              <br />

              서른하나의 푸르른 나이에 생을 마감한 꿈의 화가, 피에타 반 로섬.<br />그가
              세상에 남긴 100여개의 작품들을 모아 전시하는 마지막 미술전의
              개막을 알립니다.
              <br />
            </strong>
          </h3>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import ToHome from "@/views/ToHome";

export default {
  name: "world",
  components: {
    ToHome
  }
};
</script>

<style scoped lang="scss">
.world {
  display: flex;
  justify-content: center;
}

.v-card {
  width: 768px;
  margin: 1rem 0;
  padding: 2rem;
  background: url("../assets/steve-johnson-YS0YJLU_h2k-unsplash.jpg");
  background-size: 300%;
  font-family: "Noto Sans KR";
  h2 {
    font-family: "heiro";
  }
  .v-alert {
    margin-top: 10px;
  }
  .paragraph {
    margin: 20px 0px;
    font-style: italic;
    text-align: center;
  }
  .v-btn {
    margin: 10px 10px 10px 0;
  }
  .v-card__title {
    font-family: "heiro";
    display: flex;
    justify-content: center;
  }
}
</style>
