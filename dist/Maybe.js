'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _isNothing = function _isNothing(x) {
  return x === null || x === undefined;
};

exports.isNothing = _isNothing;
var Maybe = exports.Maybe = function Maybe(x) {
  return {
    map: function map(f) {
      return Maybe(f(x));
    },
    fold: function fold(f) {
      return f(x);
    },
    isNothing: function isNothing() {
      return _isNothing(x);
    },
    toString: function toString() {
      return 'Maybe(' + (_isNothing(x) ? 'Nothing' : x.toString()) + ')';
    }
  };
};