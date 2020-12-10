import { createStore } from 'vuex';
import stepModule from './steps/index';
import resultMessageModule from './resultMessage/index';
import timerModule from './timer/index';
import cardsModule from './cards/index';

export default createStore({
  // todo: по суті, це код який не використовується в проекті
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    stepModule,
    resultMessageModule,
    timerModule,
    cardsModule,
  },
});
