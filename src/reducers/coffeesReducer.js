import { ADD_COFFEES } from '../actions/coffeesActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_COFFEES:
      return [...state, action.payload];
    default:
      return state;
  }
}
