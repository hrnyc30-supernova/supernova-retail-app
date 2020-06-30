import { addNumber, ADD_NUMBER } from '../actions/testaction.js';

const count = (state = 0, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return state + action.payload;
    default:
      return state;
  }
};

export default count;
