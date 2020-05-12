import { ADD_TIRED } from '../actions/tiredActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_TIRED:
      return [...state, action.payload];
    default:
      return state;
  }
}
