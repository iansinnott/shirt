import { compose } from 'ramda';

import { tryCatch } from './Either.js';

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
  map: (g) => IO(compose(g, f)),
  fold: (left, right) =>
    tryCatch(f).fold(left, right),
});

