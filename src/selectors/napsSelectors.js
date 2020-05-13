// export const getTired = state => state.tired;

export const getNaps = state => state.coffees < 1 && state.naps < 1;

export const isTired = state => state.coffees < 1 && state.naps < 1;
