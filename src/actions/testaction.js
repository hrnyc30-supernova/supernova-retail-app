// action
export const ADD_NUMBER = 'ADD_NUMBER';

//action creator
const addNumber = (number) => ({
  type: ADD_NUMBER,
  payload: number,
});

export default addNumber;
