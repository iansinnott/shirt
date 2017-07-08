'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Validation = exports.Either = undefined;

var _Maybe = require('./Maybe.js');

Object.keys(_Maybe).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Maybe[key];
    }
  });
});

var _IO = require('./IO.js');

Object.keys(_IO).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IO[key];
    }
  });
});

var _fn = require('./fn.js');

Object.keys(_fn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fn[key];
    }
  });
});

var _Either2 = require('./Either.js');

var _Either = _interopRequireWildcard(_Either2);

var _Validation2 = require('./Validation.js');

var _Validation = _interopRequireWildcard(_Validation2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.Either = _Either;
exports.Validation = _Validation;