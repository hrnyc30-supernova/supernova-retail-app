import { createStore } from 'redux';
import combineReducers from '../reducers/index.js';

// const initialState = {};
const store = createStore(combineReducers, {});
export default store;
