import curry from 'ramda/src/curry';

/**
 * Either itself is abstract and does not hav ea concrete implementation
 * here. It simply serves as namespace. Either represents the idea of
 * Either(Left, Right). All concrete interactions with Eithers happen with
 * either the `Left` or `Right` constructors.
 *
 * For example, to explicitly use Either as a namespace simply do:
 * import * as Either form './path/to/Either
 */

import { isNothing } from './Maybe.js';

// Might use this in cases where I can't yet decide what to call something
function aliasMethod(method) {
  return function (...args) {
    return this[method](...args);
  };
}

export const Right = (x) => ({
  isLeft: false,
  isRight: true,
  map: (f) => Right(f(x)),
  chain: (f) => f(x),
  fold: (f, g) => g(x),
  toString: () => `Right(${x})`,
});

Right.of = x => Right(x);

export const Left = (x) => ({
  isLeft: true,
  isRight: false,
  map: (f) => Left(x),
  chain: (f) => Left(x),
  fold: (f, g) => f(x),
  toString: () => `Left(${x})`,
});

Left.of = (x) => Left(x);

export const fromNullable = (x) => isNothing(x) ? Left(null) : Right(x);

export const tryCatch = (f) => {
  try {
    return Right(f());
  } catch (err) {
    return Left(err);
  }
};

/**
 * Helper function to invoke the result of an either.
 */
export const either = curry((f, g, e) => {
  return e.fold(f, g);
});

