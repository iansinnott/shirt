export const isNothing = (x) => (x === null || x === undefined);

export const Maybe = (x) => ({
  map: (f) => Maybe(f(x)),
  fold: (f) => f(x),
  isNothing: () => isNothing(x),
  toString: () => `Maybe(${isNothing(x) ? 'Nothing' : x.toString()})`,
});
