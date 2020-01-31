<template>
  <v-row justify="center">
    <v-calendar
      ref="calendar"
      v-model="value"
      short-months
      short-weekdays
      :events="events"
      :event-color="getEventColor"
    ></v-calendar>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    type: "month",
    value: "",
    events: [
      {
        name: "장미색 선점",
        start: "2020-02-03",
        end: "2020-02-08",
        color: "#b52b65"
      },
      {
        name: "신청서 접수",
        start: "2020-02-05",
        end: "2020-02-11",
        color: "#f67280"
      },
      {
        name: "합격자 발표",
        start: "2020-02-13",
        end: "2020-02-13",
        color: "black"
      },
      {
        name: "러닝",
        start: "2020-02-16",
        end: "2020-02-22",
        color: "#621055"
      },
      {
        name: "개장",
        start: "2020-02-16 13:00:00",
        end: "2020-02-16",
        color: "pink"
      },
      {
        name: "엔딩",
        start: "2020-02-22 22:00:00",
        end: "2020-02-22",
        color: "pink"
      }
    ]
  }),
  methods: {
    getEventColor(event) {
      return event.color;
    }
  }
};
</script>

<style scoped lang="scss">
.v-calendar {
  pointer-events: none;
  font-family: "Noto Sans KR";
}
</style>
