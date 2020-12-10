<template>
  <main class="page">
    <game-over-panel></game-over-panel>
    <reset-button>Try again</reset-button>
  </main>
</template>

<script>
import GameOverPanelVue from '../components/GameOverPanel.vue';
import ResetButtonVue from '../components/ResetButton.vue';

export default {
  name: 'GameOverPage',
  components: {
    gameOverPanel: GameOverPanelVue,
    resetButton: ResetButtonVue,
  },
};
</script>
