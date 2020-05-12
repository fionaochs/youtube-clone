import { ADD_HYPER } from '../actions/hyperActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_HYPER:
      return [...state, action.payload];
    default:
      return state;
  }
}
