import { curry, curryN } from './helpers.js';

const T = () => true;

import { isNothing } from './Maybe.js';

export const Success = (x) => ({
  value: x,
  isFailure: false,
  map: (f) => Success(f(x)),
  fold: (f, g) => g(x),
  ap: (b) => b.isFailure ? b : b.map(x),
  toString: () => `Success(${x})`,
});

Success.of = (x) => Success(x);

// For now Failure must take an array, because it needs to be concatable
export const Failure = (x) => ({
  value: x,
  isFailure: true,
  map: (f) => Failure(x),
  fold: (f, g) => f(x),
  ap: (b) => b.isFailure ? Failure(x.concat(b.value)) : Failure(x), // Hm...
  toString: () => `Failure([${x.join(', ')}])`,
});

Failure.of = (x) => Failure([x]);

export const fromNullable = (x) => isNothing(x) ? Failure(x) : Success(x);

/**
 * NOTE: This is not strict, it will branch on whether the value is truthy or
 * falsey, not strictly true or false.
 *
 * I'm still really not sure what to call this method. But the idea is that you
 * provide the Failure
 */
export const successOr = (x) => (x) ? Success(x) : Failure(x);

/**
 * Given a predicate and a failure handler constructor a validation function
 * (any -> Success | Failure) that can be used with combineValidations.
 *
 * NOTE: I decided not to strictly require a funciton for the failure cause. Any
 * value can be provided, however, if the value is a function it will be called
 * with `x`. It could turn out that this is not a great idea or not worth it
 * simply to make the validation calls more concise, but for now the API is
 * defined that way.
 */
export const validate = curry((predicate, f, x) => {
  const failure = typeof f === 'function' ? f(x) : f;
  return predicate(x) ? Success(x) : Failure.of(failure);
});

/**
 * An abstraction over constructing a curried applicative functor for use with
 * validations. Rationale: The fact that one has to curry a function by the
 * number of validtions present plus the fact that the return value of that
 * function doesn't really matter makes me see this as an implementation detail.
 * In a real app I just want to construct my validations using Success/Failure
 * and pass them to some function that will handle all the ap-ing and currying
 * for me.
 */
export const combineValidations = (...args) => {
  return args.reduce((agg, validation) => {
    return agg.ap(validation);
  }, Success(curryN(args.length, T)));
};

