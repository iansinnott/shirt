'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sum = function sum(a, b) {
  return a + b;
};
var twice = function twice(a) {
  return a + a;
}; // NOTE: `double` is a reserved word
var negate = function negate(a) {
  return a * -1;
};
var isEven = function isEven(x) {
  return x % 2 === 0;
};

(0, _ava2.default)('filter', function (t) {
  var arr = [1, 2, 3];
  t.deepEqual((0, _.filter)(isEven)(arr), arr.filter(isEven));
});

(0, _ava2.default)('find', function (t) {
  var arr = [1, 2, 3];
  t.is((0, _.find)(isEven)(arr), arr.find(isEven));
  t.is((0, _.find)(isEven)([1, 3]), undefined);
});

(0, _ava2.default)('findIndex', function (t) {
  var arr = [1, 2, 3];
  t.is((0, _.findIndex)(isEven)(arr), arr.findIndex(isEven));
  t.is((0, _.findIndex)(isEven)([1, 3]), -1);
});

(0, _ava2.default)('forEach', function (t) {
  var evens = [];
  var indexes = [];
  (0, _.forEach)(function (x, i) {
    if (isEven(x)) evens.push(x);
    indexes.push(i);
  })([1, 2, 3, 4]);

  t.deepEqual(evens, [2, 4]);
  t.deepEqual(indexes, [0, 1, 2, 3]);
});

(0, _ava2.default)('indexOf', function (t) {
  var arr = [1, 2, 3];
  t.is((0, _.indexOf)(2)(arr), arr.indexOf(2));
  t.is((0, _.indexOf)(2)([1, 3]), -1);
});

(0, _ava2.default)('join', function (t) {
  var arr = [1, 2, 3];
  t.is((0, _.join)(',')(arr), '1,2,3');
  t.is((0, _.join)('<>')(arr), '1<>2<>3');
  t.is((0, _.join)('')(arr), '123');
});

(0, _ava2.default)('lastIndexOf', function (t) {
  var arr = [1, 2, 3];
  t.is((0, _.lastIndexOf)(3)(arr), arr.lastIndexOf(3));
  t.is((0, _.lastIndexOf)(3)([1, 2]), -1);
});

(0, _ava2.default)('map', function (t) {
  var arr = [1, 2, 3];
  t.deepEqual((0, _.map)(isEven)(arr), [false, true, false]);
  t.deepEqual((0, _.map)(parseInt)(['1', '2', '3']), [1, NaN, NaN]); // Still comes with all arguments, not unary map
});

(0, _ava2.default)('first', function (t) {
  var nums = [1, 2, 3, 4, 5];
  t.is((0, _.first)(nums), 1);
  t.deepEqual((0, _.first)([{ bleh: true }, 'second', 'third']), { bleh: true });
});

(0, _ava2.default)('last', function (t) {
  var nums = [1, 2, 3, 4, 5];
  t.is((0, _.last)(nums), 5);
  t.deepEqual((0, _.last)([{ bleh: true }, 'second', 'third']), 'third');
});

(0, _ava2.default)('reduce', function (t) {
  var nums = [1, 2, 3, 4, 5];
  var subtract = function subtract(a, b) {
    return a - b;
  };
  t.is((0, _.reduce)(sum, 0)(nums), nums.reduce(sum, 0));
  t.is((0, _.reduce)(subtract, (0, _.first)(nums))(nums), nums.reduce(subtract, (0, _.first)(nums))); // Must provide initial value
});

(0, _ava2.default)('reduceRight', function (t) {
  var nums = [1, 2, 3, 4, 5];
  var subtract = function subtract(a, b) {
    return a - b;
  };
  t.is((0, _.reduceRight)(sum, 0)(nums), nums.reduceRight(sum, 0));
  t.is((0, _.reduceRight)(subtract, (0, _.first)(nums))(nums), nums.reduceRight(subtract, (0, _.first)(nums))); // Must provide initial value
});

(0, _ava2.default)('type', function (t) {
  t.is((0, _.type)({}), 'Object');
  t.is((0, _.type)(1), 'Number');
  t.is((0, _.type)(false), 'Boolean');
  t.is((0, _.type)('s'), 'String');
  t.is((0, _.type)(null), 'Null');
  t.is((0, _.type)([]), 'Array');
  t.is((0, _.type)(/[A-z]/), 'RegExp');
  t.is((0, _.type)(new RegExp('a', 'gmi')), 'RegExp');
  t.is((0, _.type)(function () {}), 'Function');
  t.is((0, _.type)(undefined), 'Undefined');
  t.is((0, _.type)(new Date()), 'Date');
});

(0, _ava2.default)('sort', function (t) {
  var list = [3, 1, 8, 1, 2, 5];

  t.deepEqual((0, _.sort)(function (a, b) {
    return a - b;
  })([3, 1, 8, 1, 2, 5]), [1, 1, 2, 3, 5, 8]);
  t.deepEqual((0, _.sort)(function (a, b) {
    return a - b;
  })(list), [1, 1, 2, 3, 5, 8]);
  t.deepEqual(list, [3, 1, 8, 1, 2, 5]);

  var sortByLength = (0, _.sort)(function (a, b) {
    return a.length - b.length;
  });

  t.deepEqual(sortByLength(['one', 'two', 'three', 'four', 'five', 'six']), ['one', 'two', 'six', 'four', 'five', 'three']);
});

(0, _ava2.default)('includes', function (t) {
  var list = [3, 1, 8, 1, 2, 5];
  var str = 'hey there you';

  t.true((0, _.includes)(1)(list));
  t.false((0, _.includes)(-1)(list));
  t.true((0, _.includes)('hey')(str));
  t.true((0, _.includes)('e y')(str));
  t.false((0, _.includes)('unicorn')(str));
});

(0, _ava2.default)('toString', function (t) {
  t.is((0, _.toString)(true), 'true');
  t.is((0, _.toString)(false), 'false');
  t.is((0, _.toString)(null), 'null');
  t.is((0, _.toString)(undefined), 'undefined');
});

(0, _ava2.default)('toUpperCase', function (t) {
  t.is((0, _.toUpperCase)('hey'), 'HEY');
  t.is((0, _.toUpperCase)('HEY'), 'HEY');
  t.throws(function () {
    return (0, _.toUpperCase)({});
  });
  t.throws(function () {
    return (0, _.toUpperCase)([]);
  });
  t.throws(function () {
    return (0, _.toUpperCase)(null);
  });
  t.throws(function () {
    return (0, _.toUpperCase)(undefined);
  });
});

(0, _ava2.default)('toLowerCase', function (t) {
  t.is((0, _.toLowerCase)('hey'), 'hey');
  t.is((0, _.toLowerCase)('HEY'), 'hey');
  t.throws(function () {
    return (0, _.toLowerCase)({});
  });
  t.throws(function () {
    return (0, _.toLowerCase)([]);
  });
  t.throws(function () {
    return (0, _.toLowerCase)(null);
  });
  t.throws(function () {
    return (0, _.toLowerCase)(undefined);
  });
});

(0, _ava2.default)('test', function (t) {
  t.false((0, _.test)(/\w+/)(''));
  t.true((0, _.test)(/\w+/)('hey'));
});

(0, _ava2.default)('trim', function (t) {
  t.is((0, _.trim)('  hey  '), 'hey');
  t.is((0, _.trim)('  hey\nmore\n'), 'hey\nmore');
});

(0, _ava2.default)('startsWith', function (t) {
  t.true((0, _.startsWith)('hey')('hey you'));
  t.false((0, _.startsWith)('hey')('you hey'));
});

(0, _ava2.default)('endsWith', function (t) {
  t.false((0, _.endsWith)('hey')('hey you'));
  t.true((0, _.endsWith)('hey')('you hey'));
});

_ava2.default.todo('match');
_ava2.default.todo('repeat');
_ava2.default.todo('replace');
_ava2.default.todo('slice');
_ava2.default.todo('toPairs');
_ava2.default.todo('fromPairs');
_ava2.default.todo('allPass');
_ava2.default.todo('anyPass');

(0, _ava2.default)('prop', function (t) {
  t.is((0, _.prop)('k')({ k: 'hello' }), 'hello');
  t.is((0, _.prop)('a')({ k: 'hello' }), undefined);

  // Works up the prototype chain
  var F = function F(param) {
    this.x = param;
  };
  F.prototype.y = 40;
  F.prototype.z = 50;
  var obj = new F(30);
  obj.v = 10;
  obj.w = 20;
  t.is((0, _.prop)('v')(obj), 10);
  t.is((0, _.prop)('w')(obj), 20);
  t.is((0, _.prop)('y')(obj), 40);
  t.is((0, _.prop)('z')(obj), 50);
});

(0, _ava2.default)('isNil', function (t) {
  t.true((0, _.isNil)(undefined));
  t.true((0, _.isNil)(null));
  t.false((0, _.isNil)(''));
  t.false((0, _.isNil)('str'));
  t.false((0, _.isNil)(0));
  t.false((0, _.isNil)(true));
  t.false((0, _.isNil)(false));
  t.false((0, _.isNil)(new RegExp('', 'gi')));
  t.false((0, _.isNil)(NaN));
  t.false((0, _.isNil)({}));
  t.false((0, _.isNil)([]));
});

(0, _ava2.default)('defaultTo', function (t) {
  t.deepEqual((0, _.map)((0, _.defaultTo)('c'))(['a', 'b', null]), ['a', 'b', 'c']);
});

(0, _ava2.default)('tap', function (t) {
  var tapped = [];
  var arr = ['a', 'b', 'c'];
  var brr = arr.map((0, _.tap)(function (x) {
    return tapped.push(x);
  }));

  t.deepEqual(arr, brr);
  t.deepEqual(tapped, arr);
});

(0, _ava2.default)('equals', function (t) {
  var a = [];
  var b = a;
  // tests for deep equality of its operands
  t.deepEqual((0, _.equals)(100, 100), true);
  t.deepEqual((0, _.equals)(100, '100'), false);
  t.deepEqual((0, _.equals)([], []), true);
  t.deepEqual((0, _.equals)(a, b), true);

  // considers equal Boolean primitives equal
  t.deepEqual((0, _.equals)(true, true), true);
  t.deepEqual((0, _.equals)(false, false), true);
  t.deepEqual((0, _.equals)(true, false), false);
  t.deepEqual((0, _.equals)(false, true), false);

  // considers equivalent Boolean objects equal
  t.deepEqual((0, _.equals)(new Boolean(true), new Boolean(true)), true);
  t.deepEqual((0, _.equals)(new Boolean(false), new Boolean(false)), true);
  t.deepEqual((0, _.equals)(new Boolean(true), new Boolean(false)), false);
  t.deepEqual((0, _.equals)(new Boolean(false), new Boolean(true)), false);

  // never considers Boolean primitive equal to Boolean object
  t.deepEqual((0, _.equals)(true, new Boolean(true)), false);
  t.deepEqual((0, _.equals)(new Boolean(true), true), false);
  t.deepEqual((0, _.equals)(false, new Boolean(false)), false);
  t.deepEqual((0, _.equals)(new Boolean(false), false), false);

  // considers equal number primitives equal
  t.deepEqual((0, _.equals)(0, 0), true);
  t.deepEqual((0, _.equals)(0, 1), false);
  t.deepEqual((0, _.equals)(1, 0), false);

  // considers equivalent Number objects equal
  t.deepEqual((0, _.equals)(new Number(0), new Number(0)), true);
  t.deepEqual((0, _.equals)(new Number(0), new Number(1)), false);
  t.deepEqual((0, _.equals)(new Number(1), new Number(0)), false);

  // never considers number primitive equal to Number object
  t.deepEqual((0, _.equals)(0, new Number(0)), false);
  t.deepEqual((0, _.equals)(new Number(0), 0), false);

  // considers equal string primitives equal
  t.deepEqual((0, _.equals)('', ''), true);
  t.deepEqual((0, _.equals)('', 'x'), false);
  t.deepEqual((0, _.equals)('x', ''), false);
  t.deepEqual((0, _.equals)('foo', 'foo'), true);
  t.deepEqual((0, _.equals)('foo', 'bar'), false);
  t.deepEqual((0, _.equals)('bar', 'foo'), false);

  // considers equivalent String objects equal
  t.deepEqual((0, _.equals)(new String(''), new String('')), true);
  t.deepEqual((0, _.equals)(new String(''), new String('x')), false);
  t.deepEqual((0, _.equals)(new String('x'), new String('')), false);
  t.deepEqual((0, _.equals)(new String('foo'), new String('foo')), true);
  t.deepEqual((0, _.equals)(new String('foo'), new String('bar')), false);
  t.deepEqual((0, _.equals)(new String('bar'), new String('foo')), false);

  // never considers string primitive equal to String object
  t.deepEqual((0, _.equals)('', new String('')), false);
  t.deepEqual((0, _.equals)(new String(''), ''), false);
  t.deepEqual((0, _.equals)('x', new String('x')), false);
  t.deepEqual((0, _.equals)(new String('x'), 'x'), false);

  // handles objects
  t.deepEqual((0, _.equals)({}, {}), true);
  t.deepEqual((0, _.equals)({ a: 1, b: 2 }, { a: 1, b: 2 }), true);
  t.deepEqual((0, _.equals)({ a: 2, b: 3 }, { b: 3, a: 2 }), true);
  t.deepEqual((0, _.equals)({ a: 2, b: 3 }, { a: 3, b: 3 }), false);
  t.deepEqual((0, _.equals)({ a: 2, b: 3, c: 1 }, { a: 2, b: 3 }), false);

  // considers equivalent Error objects equal
  t.deepEqual((0, _.equals)(new Error('XXX'), new Error('XXX')), true);
  t.deepEqual((0, _.equals)(new Error('XXX'), new Error('YYY')), false);
  t.deepEqual((0, _.equals)(new Error('XXX'), new TypeError('XXX')), false);
  t.deepEqual((0, _.equals)(new Error('XXX'), new TypeError('YYY')), false);

  // handles regex
  t.deepEqual((0, _.equals)(/\s/, /\s/), true);
  t.deepEqual((0, _.equals)(/\s/, /\d/), false);
  t.deepEqual((0, _.equals)(/a/gi, /a/ig), true);
  t.deepEqual((0, _.equals)(/a/mgi, /a/img), true);
  t.deepEqual((0, _.equals)(/a/gi, /a/i), false);

  var listA = [1, 2, 3];
  var listB = [1, 3, 2];
  // handles lists
  t.deepEqual((0, _.equals)([], {}), false);
  t.deepEqual((0, _.equals)(listA, listB), false);

  var c = {};c.v = c;
  var d = {};d.v = d;
  var e = [];e.push(e);
  var f = [];f.push(f);
  var nestA = { a: [1, 2, { c: 1 }], b: 1 };
  var nestB = { a: [1, 2, { c: 1 }], b: 1 };
  var nestC = { a: [1, 2, { c: 2 }], b: 1 };
  // handles recursive data structures
  t.deepEqual((0, _.equals)(c, d), true);
  t.deepEqual((0, _.equals)(e, f), true);
  t.deepEqual((0, _.equals)(nestA, nestB), true);
  t.deepEqual((0, _.equals)(nestA, nestC), false);

  // requires that both objects have the same enumerable properties with the same values
  var a1 = [];
  var a2 = [];
  a2.x = 0;

  var b1 = new Boolean(false);
  var b2 = new Boolean(false);
  b2.x = 0;

  var d1 = new Date(0);
  var d2 = new Date(0);
  d2.x = 0;

  var n1 = new Number(0);
  var n2 = new Number(0);
  n2.x = 0;

  var r1 = /(?:)/;
  var r2 = /(?:)/;
  r2.x = 0;

  var s1 = new String('');
  var s2 = new String('');
  s2.x = 0;

  t.deepEqual((0, _.equals)(a1, a2), false);
  t.deepEqual((0, _.equals)(b1, b2), false);
  t.deepEqual((0, _.equals)(d1, d2), false);
  t.deepEqual((0, _.equals)(n1, n2), false);
  t.deepEqual((0, _.equals)(r1, r2), false);
  t.deepEqual((0, _.equals)(s1, s2), false);

  // compares Map objects by value
  t.deepEqual((0, _.equals)(new Map([]), new Map([])), true);
  t.deepEqual((0, _.equals)(new Map([]), new Map([[1, 'a']])), false);
  t.deepEqual((0, _.equals)(new Map([[1, 'a']]), new Map([])), false);
  t.deepEqual((0, _.equals)(new Map([[1, 'a']]), new Map([[1, 'a']])), true);
  t.deepEqual((0, _.equals)(new Map([[1, 'a']]), new Map([[1, 'b']])), false);
  t.deepEqual((0, _.equals)(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'c']])]])), true);
  t.deepEqual((0, _.equals)(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'd']])]])), false);
  t.deepEqual((0, _.equals)(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [4, 5, 6]]])), true);
  t.deepEqual((0, _.equals)(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [7, 8, 9]]])), false);

  // compares Set objects by value
  t.deepEqual((0, _.equals)(new Set([]), new Set([])), true);
  t.deepEqual((0, _.equals)(new Set([]), new Set([1])), false);
  t.deepEqual((0, _.equals)(new Set([1]), new Set([])), false);
  t.deepEqual((0, _.equals)(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([3])])])), true);
  t.deepEqual((0, _.equals)(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([4])])])), false);
  t.deepEqual((0, _.equals)(new Set([[1, 2, 3], [4, 5, 6]]), new Set([[1, 2, 3], [4, 5, 6]])), true);
  t.deepEqual((0, _.equals)(new Set([[1, 2, 3], [4, 5, 6]]), new Set([[1, 2, 3], [7, 8, 9]])), false);
});

(0, _ava2.default)('partition', function (t) {
  // splits a list into two lists according to a predicate
  var pred = function pred(n) {
    return n % 2;
  };
  t.deepEqual((0, _.partition)(pred)([]), [[], []]);
  t.deepEqual((0, _.partition)(pred)([0, 2, 4, 6]), [[], [0, 2, 4, 6]]);
  t.deepEqual((0, _.partition)(pred)([1, 3, 5, 7]), [[1, 3, 5, 7], []]);
  t.deepEqual((0, _.partition)(pred)([0, 1, 2, 3]), [[1, 3], [0, 2]]);

  var polarize = (0, _.partition)(Boolean);
  t.deepEqual(polarize([true, 0, 1, null]), [[true, 1], [0, null]]);
});

(0, _ava2.default)('pick', function (t) {
  var obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, 1: 7 };

  t.deepEqual((0, _.pick)(['a', 'c', 'f'])(obj), { a: 1, c: 3, f: 6 }, 'copies the named properties of an object to the new object');

  t.deepEqual((0, _.pick)([1])(obj), { 1: 7 }, 'handles numbers as properties');

  t.deepEqual((0, _.pick)(['a', 'c', 'g'])(obj), { a: 1, c: 3 }, 'ignores properties not included');

  var F = function F(param) {
    this.x = param;
  };
  F.prototype.y = 40;
  F.prototype.z = 50;
  obj = new F(30);
  obj.v = 10;
  obj.w = 20;
  t.deepEqual((0, _.pick)(['w', 'x', 'y'])(obj), { w: 20, x: 30, y: 40 }, 'retrieves prototype properties');
});

(0, _ava2.default)('concat', function (t) {
  t.deepEqual((0, _.concat)(['a'])(['b', 'c']), ['a', 'b', 'c']);
  t.is((0, _.concat)('a')('bc'), 'abc');
});

(0, _ava2.default)('every', function (t) {
  t.true((0, _.every)(isEven)([2, 4, 6]));
  t.false((0, _.every)(isEven)([1, 4, 6]));
});

(0, _ava2.default)('some', function (t) {
  var isEven = function isEven(x) {
    return x % 2 === 0;
  };
  t.true((0, _.some)(isEven)([2, 4, 6]));
  t.true((0, _.some)(isEven)([1, 4, 6]));
  t.false((0, _.some)(isEven)([1, 3, 5]));
});

(0, _ava2.default)('fill', function (t) {
  t.deepEqual((0, _.fill)(null)(Array(3)), [null, null, null]);
  t.deepEqual((0, _.fill)('val')(Array(1)), ['val']);
  t.deepEqual((0, _.fill)('val')([]), []);
});

(0, _ava2.default)('identity', function (t) {
  var obj = { a: 1, b: 2, c: 3 };
  var arr = ['a', 'b', 'c'];
  t.is((0, _.identity)('test'), 'test');
  t.is((0, _.identity)(obj), obj);
  t.is((0, _.identity)(arr), arr);
  t.is((0, _.identity)(null), null);
  t.is((0, _.identity)(), undefined);
});

(0, _ava2.default)('always', function (t) {
  var obj = { a: 1, b: 2, c: 3 };
  var arr = ['a', 'b', 'c'];
  t.is((0, _.always)('test')(), 'test');
  t.is((0, _.always)(obj)('many', 'other', 'args'), obj);
  var returnArr = (0, _.always)(arr);
  t.is(returnArr(), arr);
  t.is(returnArr('a', null, 3), arr);
  t.is((0, _.always)(null)('something'), null);
  t.is((0, _.always)()(), undefined);
});

(0, _ava2.default)('compose', function (t) {
  t.is((0, _.compose)(negate, twice)(2), -4);
  t.is((0, _.compose)(negate, twice)(2), negate(twice(2)));
  t.is((0, _.compose)(negate, twice, sum)(2, 3), -10); // Multi arg is fine if the bottom function takes it
  t.is((0, _.compose)(negate, twice, sum)(2, 3), negate(twice(sum(2, 3))));

  var toUpperAll = (0, _.map)(_.toUpper);
  var arr = ['hey', 'there', 'you'];

  t.deepEqual(toUpperAll(arr), ['HEY', 'THERE', 'YOU']);

  var str = 'HEY ~ there ~ YOU';

  t.is((0, _.compose)((0, _.join)('<|>'), (0, _.map)(_.toLower), (0, _.split)(' ~ '))(str), 'hey<|>there<|>you');
});

(0, _ava2.default)('pipe', function (t) {
  t.is((0, _.pipe)(negate, twice)(2), -4);
  t.is((0, _.pipe)(negate, function (x) {
    return x * x;
  })(2), 4);
  t.is((0, _.pipe)(function (x) {
    return x * x;
  }, negate)(2), -4);
  t.is((0, _.pipe)(negate, twice)(2), twice(negate(2)));
  t.is((0, _.pipe)(sum, twice, negate)(2, 3), -10); // Multi arg is fine if the bottom function takes it

  var toUpperAll = (0, _.map)(_.toUpper);
  var arr = ['hey', 'there', 'you'];

  t.deepEqual(toUpperAll(arr), ['HEY', 'THERE', 'YOU']);

  var str = 'HEY ~ there ~ YOU';

  t.is((0, _.pipe)((0, _.split)(' ~ '), (0, _.map)(_.toLower), (0, _.join)('<|>'))(str), 'hey<|>there<|>you');
});

(0, _ava2.default)('curry', function (t) {
  var currySum = (0, _.curry)(sum);
  var add3 = currySum(3);

  t.is(add3(4), 7);
  t.is(add3(4), currySum(3, 4));

  var addMany = (0, _.curry)(function (a, b, c, d) {
    return a + b + c + d;
  });
  t.is(addMany(1)(2)(3)(4), 10);
  t.is(addMany(1, 2)(3)(4), 10);
  t.is(addMany(1, 2, 3)(4), 10);
  t.is(addMany(1, 2, 3, 4), 10);
});