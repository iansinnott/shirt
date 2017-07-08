'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IO = undefined;

var _fn = require('./fn.js');

var _Either = require('./Either.js');

var identity = function identity(x) {
  return x;
};

var _tap = function _tap(f) {
  return function (x) {
    f(x);
    return x;
  };
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
var IO = exports.IO = function IO(f) {
  return {
    fn: f,
    map: function map(g) {
      return IO((0, _fn.compose)(g, f));
    },
    tap: function tap(g) {
      return IO((0, _fn.compose)(_tap(g), f));
    },
    chain: function chain(g) {
      return IO(function () {
        var next = g(f()); // Must return IO
        return next.fn();
      });
    },
    ap: function ap(io) {
      return io.map(f()); // Does this work?? If it doesnt check this: https://github.com/ramda/ramda-fantasy/blob/master/src/IO.js#L44
    },
    fold: function fold(left, right) {
      return (0, _Either.tryCatch)(f).fold(left, right);
    },
    foldOr: function foldOr(left) {
      return (0, _Either.tryCatch)(f).fold(left, identity);
    }
  };
};

IO.of = function (x) {
  return IO(function () {
    return x;
  });
};