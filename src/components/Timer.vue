<template>
  <section class="timer">
    <time class="text timer-text" :datetime="time">{{ time }}</time>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Timer',
  created() {
    this.countTime();
  },
  data() {
    return {
      time: 60,
    };
  },
  methods: {
    ...mapMutations({
      setTime: 'setTime',
      restoreSteps: 'restoreSteps',
    }),
    countTime() {
      setTimeout(() => {
        if (this.time > 0) {
          this.time -= 1;
          this.setTime(this.time);
          this.countTime();
        }
      }, 1000);
    },
  },
};
</script>

<style lang="sass" scoped>
.timer
  width: 40%
  margin: 0 auto
  margin-top: 2em
  display: flex
  justify-content: center
  flex-wrap: wrap
  &-text
    margin: 0
.none-text
  display: none
</style>
