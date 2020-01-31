<template>
  <div>
    <ToHome />
    <div class="schedule">
      <v-card raised elevation="15">
        <v-card-title><h1>📅일정 안내</h1></v-card-title>
        <div class="paragraph">
          전체적인 일정은 다음과 같습니다. 추후 일정 수정 시 공지로 안내드리겠습니다.
          <br />
          🌹 2월 3일 오후 1시 정각부터 8일 오후 11시 59분 59초까지 장미색 선점
          기간입니다.<br />
          🌹 2월 5일 자정부터 11일 오후 11시 59분 59초까지 신청서 접수
          기간입니다.<br />
          🌹 합격자 발표는 2월 13일 오후 중으로 예정되어 있습니다.<br />
          🌹 2월 16일 오후 1시 개장하여 22일 오후 10시까지 러닝 기간입니다.<br />
        </div>
        <Calendar />
      </v-card>
    </div>
  </div>
</template>

<script>
import ToHome from "@/views/ToHome";
import Calendar from "@/components/Calendar";

export default {
  name: "schedule",
  components: {
    ToHome,
    Calendar
  }
};
</script>

<style scoped lang="scss">
.schedule {
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
  .paragraph {
    margin: 20px 0px;
    text-indent: 0.6rem;
  }
  .v-chip {
    margin-right: 10px;
  }
  .v-card__title {
    font-family: "heiro";
    display: flex;
    justify-content: center;
  }
}
</style>
