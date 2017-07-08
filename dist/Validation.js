'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineValidations = exports.validate = exports.successOr = exports.fromNullable = exports.Failure = exports.Success = undefined;

var _fn = require('./fn.js');

var _Maybe = require('./Maybe.js');

var T = function T() {
  return true;
};

var Success = exports.Success = function Success(x) {
  return {
    value: x,
    isFailure: false,
    map: function map(f) {
      return Success(f(x));
    },
    fold: function fold(f, g) {
      return g(x);
    },
    ap: function ap(b) {
      return b.isFailure ? b : b.map(x);
    },
    toString: function toString() {
      return 'Success(' + x + ')';
    }
  };
};

Success.of = function (x) {
  return Success(x);
};

// For now Failure must take an array, because it needs to be concatable
var Failure = exports.Failure = function Failure(x) {
  return {
    value: x,
    isFailure: true,
    map: function map(f) {
      return Failure(x);
    },
    fold: function fold(f, g) {
      return f(x);
    },
    ap: function ap(b) {
      return b.isFailure ? Failure(x.concat(b.value)) : Failure(x);
    }, // Hm...
    toString: function toString() {
      return 'Failure([' + x.join(', ') + '])';
    }
  };
};

Failure.of = function (x) {
  return Failure([x]);
};

var fromNullable = exports.fromNullable = function fromNullable(x) {
  return (0, _Maybe.isNothing)(x) ? Failure(x) : Success(x);
};

/**
 * NOTE: This is not strict, it will branch on whether the value is truthy or
 * falsey, not strictly true or false.
 *
 * I'm still really not sure what to call this method. But the idea is that you
 * provide the Failure
 */
var successOr = exports.successOr = function successOr(x) {
  return x ? Success(x) : Failure(x);
};

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
var validate = exports.validate = (0, _fn.curry)(function (predicate, f, x) {
  var failure = typeof f === 'function' ? f(x) : f;
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
var combineValidations = exports.combineValidations = function combineValidations() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (agg, validation) {
    return agg.ap(validation);
  }, Success((0, _fn.curryN)(args.length, T)));
};