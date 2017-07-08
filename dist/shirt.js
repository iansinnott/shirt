(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Shirt"] = factory();
	else
		root["Shirt"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return always; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return curryN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return curry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return lastIndexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return reduceRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return includes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return toUpperCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return toLowerCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return endsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return test; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return toUpper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return toLower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return toPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return fromPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return isNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return defaultTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return tap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return allPass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return anyPass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return complement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return pick; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var identity = function identity(x) {
  return x;
};
var always = function always(x) {
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
var curryN = function curryN(n, f) {
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

var curry = function curry(f) {
  return curryN(f.length, f);
};

var compose = function compose() {
  for (var _len2 = arguments.length, fs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fs[_key2] = arguments[_key2];
  }

  return fs.reduce(function (f, g) {
    return function () {
      return f(g.apply(undefined, arguments));
    };
  });
};

var pipe = function pipe() {
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
var concat = function concat(a) {
  return function (b) {
    return a.concat(b);
  };
};
var every = function every(f) {
  return function (xs) {
    return xs.every(f);
  };
};
var some = function some(f) {
  return function (xs) {
    return xs.some(f);
  };
};
var fill = function fill(v) {
  return function (xs) {
    return xs.fill(v);
  };
};
var filter = function filter(f) {
  return function (xs) {
    return xs.filter(f);
  };
};
var find = function find(f) {
  return function (xs) {
    return xs.find(f);
  };
};
var findIndex = function findIndex(f) {
  return function (xs) {
    return xs.findIndex(f);
  };
};
var forEach = function forEach(f) {
  return function (xs) {
    return xs.forEach(f);
  };
};
var indexOf = function indexOf(v) {
  return function (xs) {
    return xs.indexOf(v);
  };
};
var join = function join(by) {
  return function (xs) {
    return xs.join(by);
  };
};
var split = function split(by) {
  return function (str) {
    return str.split(by);
  };
};
var lastIndexOf = function lastIndexOf(v) {
  return function (xs) {
    return xs.lastIndexOf(v);
  };
};
var map = function map(f) {
  return function (xs) {
    return xs.map(f);
  };
};
var reduce = function reduce(f, initial) {
  return function (xs) {
    return xs.reduce(f, initial);
  };
};
var reduceRight = function reduceRight(f, initial) {
  return function (xs) {
    return xs.reduceRight(f, initial);
  };
};
var includes = function includes(v) {
  return function (xs) {
    return xs.includes(v);
  };
};

var toString = function toString(v) {
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
var sort = function sort(f) {
  return function (xs) {
    return xs.slice().sort(f);
  };
}; // Non-mutative. f :: a, b -> Number

// String
var toUpperCase = function toUpperCase(str) {
  return str.toUpperCase();
};
var toLowerCase = function toLowerCase(str) {
  return str.toLowerCase();
};
var match = function match(re) {
  return function (str) {
    return str.match(re);
  };
};
var repeat = function repeat(n) {
  return function (str) {
    return str.repeat(n);
  };
};
var replace = function replace(re, v) {
  return str.replace(re, v);
};
var slice = function slice(a, b) {
  return function (xs) {
    return xs.slice(a, b);
  };
};
var startsWith = function startsWith(v) {
  return function (str) {
    return str.startsWith(v);
  };
};
var endsWith = function endsWith(v) {
  return function (str) {
    return str.endsWith(v);
  };
};
var trim = function trim(str) {
  return str.trim();
};

// RegExp
var test = function test(re) {
  return function (str) {
    return re.test(str);
  };
};

// These are all made up, but common enough
var toUpper = toUpperCase;
var toLower = toLowerCase;
var toPairs = null;
var fromPairs = null;
var prop = function prop(k) {
  return function (xs) {
    return xs[k];
  };
};
var isNil = function isNil(x) {
  return x === undefined || x === null;
};
var defaultTo = function defaultTo(v) {
  return function (x) {
    return isNil(x) ? v : x;
  };
};
var tap = function tap(f) {
  return function (x) {
    f(x);return x;
  };
};
var allPass = null;
var anyPass = null;
var type = function type(x) {
  return x === null ? 'Null' : x === undefined ? 'Undefined' : Object.prototype.toString.call(x).slice(8, -1);
};

// Deep equals. This one is take straight from ramda. I was going to write my
// own but this is a pretty important one and they are doing a lot of stuff I
// wasn't going to bother with. So, for now we'll just use theirs. Minus the
// overhead of the rest of ramda.
var equals = function equals(a, b) {
  return _equals(a, b, [], []);
};

var complement = function complement(f) {
  return function () {
    return !f.apply(undefined, arguments);
  };
};

var head = function head(_ref) {
  var _ref2 = _toArray(_ref),
      x = _ref2[0],
      xs = _ref2.slice(1);

  return x;
};
var first = head;
var last = function last(arr) {
  return arr[arr.length - 1];
};

var partition = function partition(f) {
  return function (xs) {
    return [xs.filter(f), xs.filter(complement(f))];
  };
};

var pick = function pick(keys) {
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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNothing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Maybe; });
var _isNothing = function _isNothing(x) {
  return x === null || x === undefined;
};


var Maybe = function Maybe(x) {
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

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Right", function() { return Right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Left", function() { return Left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromNullable", function() { return fromNullable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryCatch", function() { return tryCatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "either", function() { return either; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fn_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Maybe_js__ = __webpack_require__(1);


/**
 * Either itself is abstract and does not hav ea concrete implementation
 * here. It simply serves as namespace. Either represents the idea of
 * Either(Left, Right). All concrete interactions with Eithers happen with
 * either the `Left` or `Right` constructors.
 *
 * For example, to explicitly use Either as a namespace simply do:
 * import * as Either form './path/to/Either
 */



// Might use this in cases where I can't yet decide what to call something
function aliasMethod(method) {
  return function () {
    return this[method].apply(this, arguments);
  };
}

var Right = function Right(x) {
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

var Left = function Left(x) {
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

var fromNullable = function fromNullable(x) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Maybe_js__["a" /* isNothing */])(x) ? Left(null) : Right(x);
};

var tryCatch = function tryCatch(f) {
  try {
    return Right(f());
  } catch (err) {
    return Left(err);
  }
};

/**
 * Helper function to invoke the result of an either.
 */
var either = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__fn_js__["d" /* curry */])(function (f, g, e) {
  return e.fold(f, g);
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fn_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Either_js__ = __webpack_require__(2);




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
var IO = function IO(f) {
  return {
    fn: f,
    map: function map(g) {
      return IO(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__fn_js__["e" /* compose */])(g, f));
    },
    tap: function tap(g) {
      return IO(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__fn_js__["e" /* compose */])(_tap(g), f));
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
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Either_js__["tryCatch"])(f).fold(left, right);
    },
    foldOr: function foldOr(left) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Either_js__["tryCatch"])(f).fold(left, identity);
    }
  };
};

IO.of = function (x) {
  return IO(function () {
    return x;
  });
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Success", function() { return Success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Failure", function() { return Failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromNullable", function() { return fromNullable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successOr", function() { return successOr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineValidations", function() { return combineValidations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fn_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Maybe_js__ = __webpack_require__(1);


var T = function T() {
  return true;
};



var Success = function Success(x) {
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
var Failure = function Failure(x) {
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

var fromNullable = function fromNullable(x) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Maybe_js__["a" /* isNothing */])(x) ? Failure(x) : Success(x);
};

/**
 * NOTE: This is not strict, it will branch on whether the value is truthy or
 * falsey, not strictly true or false.
 *
 * I'm still really not sure what to call this method. But the idea is that you
 * provide the Failure
 */
var successOr = function successOr(x) {
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
var validate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__fn_js__["d" /* curry */])(function (predicate, f, x) {
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
var combineValidations = function combineValidations() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (agg, validation) {
    return agg.ap(validation);
  }, Success(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__fn_js__["c" /* curryN */])(args.length, T)));
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Maybe_js__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNothing", function() { return __WEBPACK_IMPORTED_MODULE_0__Maybe_js__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Maybe", function() { return __WEBPACK_IMPORTED_MODULE_0__Maybe_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Either_js__ = __webpack_require__(2);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Either", function() { return __WEBPACK_IMPORTED_MODULE_1__Either_js__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IO_js__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "IO", function() { return __WEBPACK_IMPORTED_MODULE_2__IO_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Validation_js__ = __webpack_require__(4);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Validation", function() { return __WEBPACK_IMPORTED_MODULE_3__Validation_js__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fn_js__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "always", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curryN", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "every", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "some", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "find", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "join", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "split", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "map", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toUpperCase", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toLowerCase", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "match", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["E"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["F"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["G"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "test", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["H"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toUpper", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["I"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toLower", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["J"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toPairs", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["K"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "fromPairs", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["L"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["M"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["N"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "defaultTo", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["O"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["P"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "allPass", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["Q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "anyPass", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["R"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "type", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["S"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["T"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "complement", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["U"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "head", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["V"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "first", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["W"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "last", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["X"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["Y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return __WEBPACK_IMPORTED_MODULE_4__fn_js__["Z"]; });










/***/ })
/******/ ]);
});