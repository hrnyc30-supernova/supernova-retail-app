import { atom } from 'recoil';

const displayAmountState = atom({
  key: 'displayAmountState',
  default: 4,
});

const allQuestionsState = atom({
  key: 'allQuestionsState',
  default: [],
});
export { displayAmountState, allQuestionsState };
