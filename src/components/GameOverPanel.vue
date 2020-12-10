<template>
  <div class="">
    <h1 class="title">{{ message }}</h1>
    <div class="flex">
      <span class="text">steps: {{ steps }}</span>
      <time class="text">time: {{ time }}</time>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'GameOverPanel',
  computed: {
    ...mapGetters({
      steps: 'getSteps',
      message: 'getMessage',
      time: 'getResultTime',
    }),
  },
};
</script>

<style lang="sass" scoped>
.flex
  margin-top: 2em
  margin-bottom: 2em
</style>
