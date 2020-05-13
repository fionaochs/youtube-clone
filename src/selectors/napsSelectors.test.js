import { getNaps } from './napsSelectors';

describe('naps selectors', () => {
  it('gets number of naps from state', () => {
    const state = {
      naps: 2
    };

    const naps = getNaps(state);

    expect(naps).toEqual(
      { naps: 2 }
    );
  });
});
