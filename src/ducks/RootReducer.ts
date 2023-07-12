import {combineReducers} from 'redux';

import todo from './Todo';

const appReducer = combineReducers({
  todo,
});
const RootReducer = (state, action) => {
  return appReducer(state, action);
};

export default RootReducer;
