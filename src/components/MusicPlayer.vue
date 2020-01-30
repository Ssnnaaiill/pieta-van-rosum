<template>
  <div class="music-player">
    <v-card dark elevation="20">
      <v-btn icon v-on:click="prevSong()">
        <v-icon>mdi-skip-previous</v-icon>
      </v-btn>
      <v-btn icon v-on:click="playAudio()">
        <transition name="slide-fade" mode="out-in">
          <v-icon size="30" v-if="currentlyStopped">mdi-stop</v-icon>
          <v-icon size="30" v-if="currentlyPlaying">mdi-pause-circle</v-icon>
          <v-icon size="30" v-if="!currentlyPlaying">mdi-play-circle</v-icon>
        </transition>
      </v-btn>
      <v-btn icon v-on:click="nextSong()">
        <v-icon>mdi-skip-next</v-icon>
      </v-btn>
      <v-progress-linear color="pink" :value="progress"></v-progress-linear>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    audio: "",
    currentlyPlaying: false,
    currentlyStopped: false,
    currentTime: 0,
    checkingCurrentPositionInTrack: "",
    trackDuration: 0,
    progress: 0,
    currentSong: 0,
    debug: false,
    musicPlaylist: [
      {
        url:
          "https://tistory2.daumcdn.net/tistory/2958786/skin/images/lafollia.mp3"
      }
    ],
    audioFile: ""
  }),
  mounted() {
    this.changeSong();
    this.audio.loop = true;
  },
  methods: {
    nextSong() {
      if (this.currentSong < this.musicPlaylist.length - 1) {
        this.changeSong(this.currentSong + 1);
      } else {
        this.currentSong = 0;
        this.changeSong(this.currentSong);
      }
    },
    prevSong() {
      if (this.currentSong > 0) {
        this.changeSong(this.currentSong - 1);
      } else {
        this.currentSong = 0;
        this.changeSong(this.currentSong);
      }
    },
    changeSong: function(index) {
      var wasPlaying = this.currentlyPlaying;
      this.imageLoaded = false;
      if (index !== undefined) {
        this.stopAudio();
        this.currentSong = index;
      }
      this.audioFile = this.musicPlaylist[this.currentSong].url;
      this.audio = new Audio(this.audioFile);
      var localThis = this;
      this.audio.addEventListener("loadedmetadata", function() {
        localThis.trackDuration = Math.round(this.duration);
      });
      this.audio.addEventListener("ended", this.handleEnded);
      if (wasPlaying) {
        this.playAudio();
      }
    },
    playAudio() {
      if (
        this.currentlyStopped == true &&
        this.currentSong + 1 == this.musicPlaylist.length
      ) {
        this.currentSong = 0;
        this.changeSong();
      }
      if (!this.currentlyPlaying) {
        this.getCurrentTimeEverySecond(true);
        this.currentlyPlaying = true;
        this.audio.play();
      } else {
        this.stopAudio();
      }
      this.currentlyStopped = false;
    },
    stopAudio() {
      this.audio.pause();
      this.currentlyPlaying = false;
      this.pausedMusic();
    },
    handleEnded: function() {
      if (this.currentSong + 1 == this.musicPlaylist.length) {
        this.stopAudio();
        this.currentlyPlaying = false;
        this.currentlyStopped = true;
      } else {
        this.currentlyPlaying = false;
        this.currentSong++;
        this.changeSong();
        this.playAudio();
      }
    },
    getCurrentTimeEverySecond() {
      var localThis = this;
      this.checkingCurrentPositionInTrack = setTimeout(
        function() {
          localThis.currentTime = localThis.audio.currentTime;
          localThis.progress =
            (localThis.audio.currentTime / localThis.trackDuration) * 100;
          localThis.getCurrentTimeEverySecond(true);
        }.bind(this),
        1000
      );
    },
    pausedMusic() {
      clearTimeout(this.checkingCurrentPositionInTrack);
    }
  },
  watch: {
    currentTime() {
      this.currentTime = Math.round(this.currentTime);
    }
  },
  beforeDestroy() {
    this.audio.removeEventListener("ended", this.handleEnded);
    this.audio.removeEventListener("loadedmetadata", this.handleEnded);
    clearTimeout(this.checkingCurrentPositionInTrack);
  }
};
</script>

<style scoped lang="scss">
.animated {
  animation-duration: 0.5s;
}

.music-player {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-card {
  width: 450px;
  margin-top: 6rem;
  will-change: transform, filter;
  transition: 0.5s;
}
</style>
