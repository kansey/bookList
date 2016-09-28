import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import addBook from './add';

const rootReducer = combineReducers({
  addBook,
  routing
});

export default rootReducer;
