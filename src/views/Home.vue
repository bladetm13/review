<template>
  <main class="page">
    <h1 class="title">Welcome to game!</h1>
    <nav>
      <timer />
    </nav>
    <game-panel></game-panel>
  </main>
</template>

<script>
import GamePanelVue from '@/components/GamePanel.vue';
import TimerVue from '@/components/Timer.vue';

export default {
  name: 'Home',
  components: {
    gamePanel: GamePanelVue,
    timer: TimerVue,
  },
};
</script>
