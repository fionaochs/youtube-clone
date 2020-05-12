import { getStudies } from './studiesSelectors';

describe('studies selectors', () => {
  it('gets number of studies from state', () => {
    const state = {
      studies: 2
    };

    const naps = getStudies(state);

    expect(naps).toEqual(
      { studies: 2 }
    );
  });
});
