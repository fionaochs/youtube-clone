import { addHungry } from '../actions/hungryActions';
import reducer from './hungryReducer';

describe('hungry reducer', () => {
  it('handles the ADD_HUNGRY action', () => {
    const state = [];
    const action = addHungry(2);

    const newState = reducer(state, action);

    expect(newState).toEqual([{
      snacks: 2
    }]);
  });
});
