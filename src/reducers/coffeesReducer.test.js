import { addHyper } from '../actions/coffeesActions';
import reducer from './hyperReducer';

describe('hyper reducer', () => {
  it('handles the ADD_HYPER action', () => {
    const state = [];
    const action = addHyper(2);

    const newState = reducer(state, action);

    expect(newState).toEqual([{
      coffees: 2
    }]);
  });
});
