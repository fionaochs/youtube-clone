import { ADD_SNACKS } from '../actions/snacksActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_SNACKS:
      return [...state, action.payload];
    default:
      return state;
  }
}
