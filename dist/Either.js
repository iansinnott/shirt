'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.either = exports.tryCatch = exports.fromNullable = exports.Left = exports.Right = undefined;

var _fn = require('./fn.js');

var _Maybe = require('./Maybe.js');

// Might use this in cases where I can't yet decide what to call something
function aliasMethod(method) {
  return function () {
    return this[method].apply(this, arguments);
  };
}

/**
 * Either itself is abstract and does not hav ea concrete implementation
 * here. It simply serves as namespace. Either represents the idea of
 * Either(Left, Right). All concrete interactions with Eithers happen with
 * either the `Left` or `Right` constructors.
 *
 * For example, to explicitly use Either as a namespace simply do:
 * import * as Either form './path/to/Either
 */

var Right = exports.Right = function Right(x) {
  return {
    isLeft: false,
    isRight: true,
    map: function map(f) {
      return Right(f(x));
    },
    tap: function tap(f) {
      f(x); // Just runs it, but completely ignores the output
      return Right(x);
    },
    chain: function chain(f) {
      return f(x);
    },
    fold: function fold(f, g) {
      return g(x);
    },
    foldOr: function foldOr(f) {
      return x;
    },
    toString: function toString() {
      return 'Right(' + x + ')';
    }
  };
};

Right.of = function (x) {
  return Right(x);
};

var Left = exports.Left = function Left(x) {
  return {
    isLeft: true,
    isRight: false,
    map: function map(f) {
      return Left(x);
    },
    tap: function tap(f) {
      f(x); // Just runs it, but completely ignores the output
      return Left(x);
    },
    chain: function chain(f) {
      return Left(x);
    },
    fold: function fold(f, g) {
      return f(x);
    },
    foldOr: function foldOr(f) {
      return f(x);
    },
    toString: function toString() {
      return 'Left(' + x + ')';
    }
  };
};

Left.of = function (x) {
  return Left(x);
};

var fromNullable = exports.fromNullable = function fromNullable(x) {
  return (0, _Maybe.isNothing)(x) ? Left(null) : Right(x);
};

var tryCatch = exports.tryCatch = function tryCatch(f) {
  try {
    return Right(f());
  } catch (err) {
    return Left(err);
  }
};

/**
 * Helper function to invoke the result of an either.
 */
var either = exports.either = (0, _fn.curry)(function (f, g, e) {
  return e.fold(f, g);
});