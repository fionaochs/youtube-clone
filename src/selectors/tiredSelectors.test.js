import { getTired } from './tiredSelectors';

describe('tired selectors', () => {
  it('gets number of naps from state', () => {
    const state = {
      naps: 2
    };

    const naps = getTired(state);

    expect(naps).toEqual(
      { naps: 2 }
    );
  });
});
