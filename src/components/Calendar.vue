<template>
  <v-row justify="center">
    <v-date-picker
      v-model="picker"
      color="black"
      picker-date="2020-02"
      :events="functionEvents"
      :event-color="date => (date[9] < 16 ? 'yellow' : 'yellow')"
      readonly
      no-title
    ></v-date-picker>
    <v-list disabled>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-chip dark :color="item.color">{{ item.text }}</v-chip>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    picker: new Date().toISOString().substr(0, 10),
    items: [
      { text: "장미 색 선점", color: "green" },
      { text: "신청서 접수", color: "yellow" },
      { text: "스토리 진행", color: "pink" }
    ]
  }),
  methods: {
    functionEvents(date) {
      const [, , day] = date.split("-");
      if ([5, 6, 7, 8].includes(parseInt(day, 10))) return ["green"];
      if ([9, 10, 11, 12].includes(parseInt(day, 10)))
        return ["green", "yellow"];
      if ([13, 14, 15].includes(parseInt(day, 10))) return true;
      if ([16, 17, 18, 19, 20, 21, 22].includes(parseInt(day, 10)))
        return ["pink"];
      return false;
    }
  }
};
</script>

<style scoped lang="scss">
.v-date-picker {
  pointer-events: none;
}
</style>
