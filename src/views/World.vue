<template>
  <div>
    <ToHome />
    <div class="world">
      <v-card raised elevation="15">
        <v-card-title>
          <h1>✨세계관</h1>
        </v-card-title>
        <v-alert type="error" color="pink" elevation="12">
          <strong>
            커뮤니티 운영 중 묘사되는 모든 배경, 인물, 사건 등은 허구입니다.
            이에 거부감을 느끼시거나, 과도한 몰입감을 느끼실 경우 커뮤니티
            참여를 재고해 주시기 바랍니다.
          </strong>
        </v-alert>
        <v-banner dark elevation="20">
          <div class="paragraph">
            정오가 조금 지날 무렵, 회색빛 하늘 아래...<br />당신은 한 전시회를
            보러 어느 작은 미술관으로 향했습니다.<br />
          </div>
          <div class="paragraph">
            그곳은 피에타 반 로섬의 마지막 전시회가 열리는 곳으로,<br />많지도
            적지도 않은 관람객들 사이에서 그의 생전의 걸작들을 볼 수 있었습니다.
          </div>
          <div class="paragraph">
            잔잔한 음악이 흐르는 공간, 그리고 사방에 걸린 환상적인 작품들.<br />
            당신은 시간 가는 줄 모르고 그림을 구경하고 있었을 수도 있고,<br />지루하게
            아무 생각 없이 돌아다니고 있었을 수도 있지요.
          </div>
          <div class="paragraph">
            이곳저곳 둘러보던 도중, 당신은 어떠한 커다란 그림에 시선이 사로잡혀
            한참 동안 그 그림을 바라보고 있었습니다.
          </div>
          <div class="paragraph" style="color: #e91e63;">
            <strong>" 이런 그림, 본 적 없는 것 같은데...? "</strong>
          </div>
          <div class="paragraph">
            참 이상한 일이지요. 반 로섬 정도 되는 화가의, 이렇게 큰 그림을 본
            기억이 없다니.
          </div>
          <div class="paragraph">
            시간 가는 줄 모르고 홀린 듯이 그림을 바라보고 있던 도중,<br />당신은
            어떤 위화감을 느끼고는 퍼뜩 정신이 들어 주위를 살펴봅니다.<br />
            <div style="color: #e91e63;">
              <strong>미술관의 사람들이 다 어디로 간 거죠?</strong>
            </div>
          </div>
          <div class="paragraph">
            창문 밖은 깜깜하고, 미술관의 출구는 닫혀있습니다.<br />도움을 구하려
            소리쳐 보기도 했지만, 돌아오는 것은 당신의 메아리 뿐이었습니다.
          </div>
          <div class="paragraph">
            출구를 찾다 지쳐 잠시 쉬려 하던 그때, 당신의 귓가에 어떤 낯선 존재의
            목소리가 들려옵니다.
          </div>
          <div class="paragraph">
            <h3 style="color: #e91e63; font-style: italic;">
              <strong
                >이쪽이야! 이쪽이야. 이리 와, 이리로 와. 같이 놀자!</strong
              >
            </h3>
          </div>
          <div class="paragraph">
            당신을 해치려는 사람일까요?<br />
            말로만 듣던 유령일까요?<br />
            그것도 아니라면... 당신을 구하러 온 도움의 손길일까요.
          </div>
          <div class="paragraph">
            그런 생각을 할 틈을 가지기에는 너무나 매혹적인 목소리였기에,<br />
            당신은 한 걸음, 한 걸음,<br />
          </div>
          <div class="paragraph">
            <h2 style="color: gray;">
              <strong>목소리를 따라, 홀린 듯이 발걸음을 옮깁니다 ….</strong>
            </h2>
          </div>
        </v-banner>
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
  .v-banner {
    padding: 20px;
  }
  .paragraph {
    margin: 20px 0px;
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
