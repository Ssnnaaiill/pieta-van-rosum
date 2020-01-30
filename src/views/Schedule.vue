<template>
  <div>
    <ToHome />
    <div class="schedule">
      <v-card raised elevation="15">
        <v-card-title><h1>📅일정 안내</h1></v-card-title>
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
  font-family: "KoPub Dotum";
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
