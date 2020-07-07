import { atom } from 'recoil';

const displayAmountState = atom({
  key: 'displayAmountState',
  default: 4,
});

const allQuestionsState = atom({
  key: 'allQuestionsState',
  default: [],
});

const quesitonIdState = atom({
  key: 'quesitonIdState',
  default: null,
});

const addAnswerState = atom({
  key: 'addAnswerState',
  default: false,
});

export {
  displayAmountState,
  allQuestionsState,
  quesitonIdState,
  addAnswerState,
};
