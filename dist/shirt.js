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

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return curryN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return curry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return compose; });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Maybe_js__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Right", function() { return Right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Left", function() { return Left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromNullable", function() { return fromNullable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryCatch", function() { return tryCatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "either", function() { return either; });


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
var either = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["b" /* curry */])(function (f, g, e) {
  return e.fold(f, g);
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Either_js__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IO; });




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
      return IO(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["c" /* compose */])(g, f));
    },
    tap: function tap(g) {
      return IO(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["c" /* compose */])(_tap(g), f));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Maybe_js__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Success", function() { return Success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Failure", function() { return Failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromNullable", function() { return fromNullable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successOr", function() { return successOr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineValidations", function() { return combineValidations; });


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
var validate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["b" /* curry */])(function (predicate, f, x) {
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
  }, Success(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* curryN */])(args.length, T)));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_js__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curryN", function() { return __WEBPACK_IMPORTED_MODULE_4__helpers_js__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return __WEBPACK_IMPORTED_MODULE_4__helpers_js__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__helpers_js__["c"]; });










/***/ })
/******/ ]);
});