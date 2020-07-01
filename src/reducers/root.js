import count from './count';
import ProductTitle from './ProductTitle';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  count,
  ProductTitle,
});

export default rootReducer;
