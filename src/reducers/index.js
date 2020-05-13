import { combineReducers } from 'redux';
import studies from './studiesReducer';
import snacks from './snacksReducer';
import coffees from './coffeesReducer';
import naps from './napsReducer';

export default combineReducers({
  studies: studies,
  snacks: snacks,
  coffees: coffees,
  naps: naps
});
