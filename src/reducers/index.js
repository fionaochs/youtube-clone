import { combineReducers } from 'redux';
import educated from './educatedReducer';
import hungry from './hungryReducer';
import hyper from './hyperReducer';
import tired from './tiredReducer';

export default combineReducers({
  educated: educated,
  hungry: hungry,
  hyper: hyper,
  tired: tired
});
