<template>
  <button type="button" @click="resetGame()" class="button"><slot></slot></button>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ResetButton',
  methods: {
    // todo: використовувати масив трошки простіше
    ...mapMutations([
      'restoreSteps',
      'setDefaultTime',
      'resetCardsWithNumbers',
    ]),
    resetGame() {
      this.restoreSteps();
      this.setDefaultTime();
      this.resetCardsWithNumbers();
      this.$router.push('/');
    },
  },
};
</script>

<style lang="sass" scoped>
@import '@/main.sass'

.button
  margin: 0 auto
  display: block
  padding: 1em 0.8em
  border-radius: 12px
  border: 4px solid $turquoise
  background-color: $black
</style>
