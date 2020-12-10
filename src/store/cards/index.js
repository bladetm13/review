import getters from './getters';
import mutations from './mutations';

// todo: оце все можна було згенерувати значно коротшим способом
// const state = {
//   cardsWithNumbers: [
//     {
//       id: 0,
//       value: 1,
//       disable: '',
//     },
//     {
//       id: 1,
//       value: 2,
//       disable: '',
//     },
//     {
//       id: 2,
//       value: 3,
//       disable: '',
//     },
//     {
//       id: 3,
//       value: 4,
//       disable: '',
//     },
//     {
//       id: 4,
//       value: 5,
//       disable: '',
//     },
//     {
//       id: 5,
//       value: 6,
//       disable: '',
//     },
//     {
//       id: 6,
//       value: 3,
//       disable: '',
//     },
//     {
//       id: 7,
//       value: 2,
//       disable: '',
//     },
//     {
//       id: 8,
//       value: 4,
//       disable: '',
//     },
//     {
//       id: 9,
//       value: 1,
//       disable: '',
//     },
//     {
//       id: 10,
//       value: 5,
//       disable: '',
//     },
//     {
//       id: 11,
//       value: 6,
//       disable: '',
//     },
//   ],
// };

const cardsWithNumbers = Array
  .from(new Array(12), (value, index) => index) // генеруємо массив [0,1,2,3...11]
  .map((value) => ({ // тут генеруємо картки
    id: value,
    value: (value % 6) + 1,
    disable: '', // тут краще одразу проставити false замість ''
  }))
  .sort(() => Math.random() - 0.5); // тут їх перемішуємо

export default {
  state: { cardsWithNumbers },
  getters,
  mutations,
};
