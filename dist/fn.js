'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var identity = exports.identity = function identity(x) {
  return x;
};
var always = exports.always = function always(x) {
  return function () {
    return x;
  };
};

/**
 * NOTE: recursiveArgs is used in the recursive case, but will generally not be
 * used in the initial invocation by the user
 *
 * Although this is not taken from Ramda their original approach might be worth
 * a look if refactoring:
 * https://github.com/ramda/ramda/blob/v0.5.0/ramda.js#L297-L309
 */
var curryN = exports.curryN = function curryN(n, f) {
  var recursiveArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return function () {
    for (var _len = arguments.length, innerArgs = Array(_len), _key = 0; _key < _len; _key++) {
      innerArgs[_key] = arguments[_key];
    }

    var curryArgs = recursiveArgs.concat(innerArgs);

    if (curryArgs.length >= n) {
      return f.apply(undefined, _toConsumableArray(curryArgs.slice(0, n)));
    } else {
      return curryN(n, f, curryArgs);
    }
  };
};

var curry = exports.curry = function curry(f) {
  return curryN(f.length, f);
};

var compose = exports.compose = function compose() {
  for (var _len2 = arguments.length, fs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fs[_key2] = arguments[_key2];
  }

  return fs.reduce(function (f, g) {
    return function () {
      return f(g.apply(undefined, arguments));
    };
  });
};

var pipe = exports.pipe = function pipe() {
  for (var _len3 = arguments.length, fs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    fs[_key3] = arguments[_key3];
  }

  return fs.reduceRight(function (f, g) {
    return function () {
      return f(g.apply(undefined, arguments));
    };
  });
};

// "Dispatchers" like this just call out to the underlying method. So they
// should work on anything with a collection interface
var concat = exports.concat = function concat(a) {
  return function (b) {
    return a.concat(b);
  };
};
var every = exports.every = function every(f) {
  return function (xs) {
    return xs.every(f);
  };
};
var some = exports.some = function some(f) {
  return function (xs) {
    return xs.some(f);
  };
};
var fill = exports.fill = function fill(v) {
  return function (xs) {
    return xs.fill(v);
  };
};
var filter = exports.filter = function filter(f) {
  return function (xs) {
    return xs.filter(f);
  };
};
var find = exports.find = function find(f) {
  return function (xs) {
    return xs.find(f);
  };
};
var findIndex = exports.findIndex = function findIndex(f) {
  return function (xs) {
    return xs.findIndex(f);
  };
};
var forEach = exports.forEach = function forEach(f) {
  return function (xs) {
    return xs.forEach(f);
  };
};
var indexOf = exports.indexOf = function indexOf(v) {
  return function (xs) {
    return xs.indexOf(v);
  };
};
var join = exports.join = function join(by) {
  return function (xs) {
    return xs.join(by);
  };
};
var split = exports.split = function split(by) {
  return function (str) {
    return str.split(by);
  };
};
var lastIndexOf = exports.lastIndexOf = function lastIndexOf(v) {
  return function (xs) {
    return xs.lastIndexOf(v);
  };
};
var map = exports.map = function map(f) {
  return function (xs) {
    return xs.map(f);
  };
};
var reduce = exports.reduce = function reduce(f, initial) {
  return function (xs) {
    return xs.reduce(f, initial);
  };
};
var reduceRight = exports.reduceRight = function reduceRight(f, initial) {
  return function (xs) {
    return xs.reduceRight(f, initial);
  };
};
var includes = exports.includes = function includes(v) {
  return function (xs) {
    return xs.includes(v);
  };
};

var toString = exports.toString = function toString(v) {
  if (isNil(v)) {
    return toLower(type(v));
  } else if (type(v.toString) === 'Function') {
    return v.toString();
  } else {
    // Can't honestly think of what would get to this, but its JS so i'm sure
    // there's something
    throw new Error('Could not stringify ' + v);
  }
};

// This is not technically a dispatcher since its functionality does differ from
// standard JS. It creates a copy of the array before sorting it so the original
// array remains the way it was.
var sort = exports.sort = function sort(f) {
  return function (xs) {
    return xs.slice().sort(f);
  };
}; // Non-mutative. f :: a, b -> Number

// String
var toUpperCase = exports.toUpperCase = function toUpperCase(str) {
  return str.toUpperCase();
};
var toLowerCase = exports.toLowerCase = function toLowerCase(str) {
  return str.toLowerCase();
};
var match = exports.match = function match(re) {
  return function (str) {
    return str.match(re);
  };
};
var repeat = exports.repeat = function repeat(n) {
  return function (str) {
    return str.repeat(n);
  };
};
var replace = exports.replace = function replace(re, v) {
  return str.replace(re, v);
};
var slice = exports.slice = function slice(a, b) {
  return function (xs) {
    return xs.slice(a, b);
  };
};
var startsWith = exports.startsWith = function startsWith(v) {
  return function (str) {
    return str.startsWith(v);
  };
};
var endsWith = exports.endsWith = function endsWith(v) {
  return function (str) {
    return str.endsWith(v);
  };
};
var trim = exports.trim = function trim(str) {
  return str.trim();
};

// RegExp
var test = exports.test = function test(re) {
  return function (str) {
    return re.test(str);
  };
};

// These are all made up, but common enough
var toUpper = exports.toUpper = toUpperCase;
var toLower = exports.toLower = toLowerCase;
var toPairs = exports.toPairs = null;
var fromPairs = exports.fromPairs = null;
var prop = exports.prop = function prop(k) {
  return function (xs) {
    return xs[k];
  };
};
var isNil = exports.isNil = function isNil(x) {
  return x === undefined || x === null;
};
var defaultTo = exports.defaultTo = function defaultTo(v) {
  return function (x) {
    return isNil(x) ? v : x;
  };
};
var tap = exports.tap = function tap(f) {
  return function (x) {
    f(x);return x;
  };
};
var allPass = exports.allPass = null;
var anyPass = exports.anyPass = null;
var type = exports.type = function type(x) {
  return x === null ? 'Null' : x === undefined ? 'Undefined' : Object.prototype.toString.call(x).slice(8, -1);
};

// Deep equals. This one is take straight from ramda. I was going to write my
// own but this is a pretty important one and they are doing a lot of stuff I
// wasn't going to bother with. So, for now we'll just use theirs. Minus the
// overhead of the rest of ramda.
var equals = exports.equals = function equals(a, b) {
  return _equals(a, b, [], []);
};

var complement = exports.complement = function complement(f) {
  return function () {
    return !f.apply(undefined, arguments);
  };
};

var head = exports.head = function head(_ref) {
  var _ref2 = _toArray(_ref),
      x = _ref2[0],
      xs = _ref2.slice(1);

  return x;
};
var first = exports.first = head;
var last = exports.last = function last(arr) {
  return arr[arr.length - 1];
};

var partition = exports.partition = function partition(f) {
  return function (xs) {
    return [xs.filter(f), xs.filter(complement(f))];
  };
};

var pick = exports.pick = function pick(keys) {
  return function (obj) {
    return keys.reduce(function (agg, k) {
      if (obj[k]) {
        agg[k] = obj[k];
      }
      return agg;
    }, {});
  };
};

/* Helpers
 * ======================================================================= */

var _arrayFromIterator = function _arrayFromIterator(iterator) {
  var result = [];
  var next = void 0;
  while (!(next = iterator.next()).done) {
    result.push(next.value);
  }
  return result;
};

var _functionName = function _functionName(f) {
  return f.name;
};

var _has = function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

// Not sure what was going on here, but _equals wants it...
var _identical = function _identical(a, b) {
  return a === b ? a !== 0 || 1 / a === 1 / b : a !== a && b !== b;
};

function _equals(a, b, stackA, stackB) {
  if (_identical(a, b)) {
    return true;
  }

  if (type(a) !== type(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (type(a)) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === (typeof b === 'undefined' ? 'undefined' : _typeof(b)) && _identical(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!_identical(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
    case 'Map':
    case 'Set':
      if (!_equals(_arrayFromIterator(a.entries()), _arrayFromIterator(b.entries()), stackA, stackB)) {
        return false;
      }
      break;
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
      break;
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = Object.keys(a);
  if (keysA.length !== Object.keys(b).length) {
    return false;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  stackA.push(a);
  stackB.push(b);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], stackA, stackB))) {
      return false;
    }
    idx -= 1;
  }
  stackA.pop();
  stackB.pop();
  return true;
};