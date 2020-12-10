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
  // в тебе в стор і тут початковий час ініціалізється окремо
  // якщо в стор змінити час на 30 секунд а тут забути і залишити 60
  // виникнуть баги
  //
  // data() {
  //   return {
  //     time: 60,
  //   };
  // },

  // витягаємо поле із store
  computed: {
    time() {
      // todo: краще через getter або mapState, це для прикладу
      // єдине `ResetButton` не скидає час назад на 60 секунд
      return this.$store.state.timerModule.time;
    },
  },

  // або ініціалізуємо через created, якщо не зручно використовувати computed
  // created() {
  //   this.time = this.computedTime; // this.$store.state.timerModule.time
  // },

  methods: {
    ...mapMutations({
      setTime: 'setTime',
      restoreSteps: 'restoreSteps',
    }),
    countTime() {
      setTimeout(() => {
        if (this.time > 0) {
          // this.time -= 1;
          this.setTime(this.time - 1);
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
