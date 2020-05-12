import { ADD_STUDIES } from '../actions/studiesActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_STUDIES:
      return [...state, action.payload];
    default:
      return state;
  }
}
