import { compose } from './helpers.js';

import { tryCatch } from './Either.js';

const identity = x => x;

const tap = (f) => (x) => {
  f(x);
  return x;
};

/**
 * Wraps the execution of a function so that:
 *
 * - Execution is delayed until the calling code runs `either`
 * - Errors can be handled in a functional way with either
 * - We can easily build up a lazy computation based on the IO using map
 *
 * The last point is the biggest win of IO: It's lazy, meaning we can map away
 * all we want and it just builds up a computation. It will only be called at
 * the end when it is `fold`ed.
 */
export const IO = (f) => ({
  fn: f,
  map: (g) => IO(compose(g, f)),
  tap: (g) => {
    return IO(compose(tap(g), f));
  },
  chain: (g) => IO(() => {
    const next = g(f()); // Must return IO
    return next.fn();
  }),
  ap: (io) => {
    return io.map(f()); // Does this work?? If it doesnt check this: https://github.com/ramda/ramda-fantasy/blob/master/src/IO.js#L44
  },
  fold: (left, right) =>
    tryCatch(f).fold(left, right),
  foldOr: (left) =>
    tryCatch(f).fold(left, identity),
});

IO.of = x => IO(() => x);
