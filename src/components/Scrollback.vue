<template>
  <v-fab-transition>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      white
      fixed
      bottom
      right
      x-large
      dark
      v-on:click="toTop"
      elevation="20"
    >
      <v-icon color="white">mdi-arrow-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  data: () => ({
    fab: false
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
