import { addTired } from '../actions/tiredActions';
import reducer from './tiredReducer';

describe('tired reducer', () => {
  it('handles the ADD_TIRED action', () => {
    const state = [];
    const action = addTired(2, 2);

    const newState = reducer(state, action);

    expect(newState).toEqual([{
      coffees: 2,
      naps: 2
    }]);
  });
});
