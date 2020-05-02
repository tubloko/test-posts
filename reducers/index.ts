import { combineReducers } from 'redux';
import postReducer, { initialState as postState } from './postReducer';

export const initialState = {
  postReducer: postState,
};

export default combineReducers({
  postReducer,
});
