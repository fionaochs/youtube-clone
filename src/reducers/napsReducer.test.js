import { addNaps } from '../actions/napsActions';
import reducer from './napsReducer';

describe('naps reducer', () => {
  it('handles the ADD_NAPS action', () => {
    const state = [];
    const action = addNaps(2);

    const newState = reducer(state, action);

    expect(newState).toEqual([{
      naps: 2
    }]);
  });
});
