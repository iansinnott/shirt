import test from 'ava';

import {
  identity,
  always,
  compose,
  pipe,
  curry,
  split,
  concat,
  every,
  some,
  fill,
  filter,
  find,
  findIndex,
  forEach,
  indexOf,
  join,
  lastIndexOf,
  map,
  type,
  first,
  head,
  last,
  reduce,
  reduceRight,
  sort,
  includes,
  toString,
  toUpperCase,
  toLowerCase,
  match,
  repeat,
  replace,
  slice,
  startsWith,
  endsWith,
  trim,
  test as testStr, // Since `test` is already defined...
  toUpper,
  toLower,
  toPairs,
  fromPairs,
  prop,
  isNil,
  defaultTo,
  tap,
  allPass,
  anyPass,
  equals,
  partition,
  pick,
} from './';

const sum = (a, b) => a + b;
const twice = a => a + a; // NOTE: `double` is a reserved word
const negate = a => a * -1;
const isEven = x => x % 2 === 0;

test('filter', t => {
  const arr = [1,2,3];
  t.deepEqual(filter(isEven)(arr), arr.filter(isEven));
});

test('find', t => {
  const arr = [1,2,3];
  t.is(find(isEven)(arr), arr.find(isEven));
  t.is(find(isEven)([1,3]), undefined);
});

test('findIndex', t => {
  const arr = [1,2,3];
  t.is(findIndex(isEven)(arr), arr.findIndex(isEven));
  t.is(findIndex(isEven)([1,3]), -1);
});

test('forEach', t => {
  const evens = [];
  const indexes = [];
  forEach((x, i) => {
    if (isEven(x)) evens.push(x);
    indexes.push(i);
  })([1,2,3,4]);

  t.deepEqual(evens, [2,4]);
  t.deepEqual(indexes, [0,1,2,3]);
});

test('indexOf', t => {
  const arr = [1,2,3];
  t.is(indexOf(2)(arr), arr.indexOf(2));
  t.is(indexOf(2)([1,3]), -1);
});

test('join', t => {
  const arr = [1,2,3];
  t.is(join(',')(arr), '1,2,3');
  t.is(join('<>')(arr), '1<>2<>3');
  t.is(join('')(arr), '123');
});

test('lastIndexOf', t => {
  const arr = [1,2,3];
  t.is(lastIndexOf(3)(arr), arr.lastIndexOf(3));
  t.is(lastIndexOf(3)([1,2]), -1);
});

test('map', t => {
  const arr = [1,2,3];
  t.deepEqual(map(isEven)(arr), [false, true, false]);
  t.deepEqual(map(parseInt)(['1', '2', '3']), [1, NaN, NaN]); // Still comes with all arguments, not unary map
});

test('first', t => {
  const nums = [1,2,3,4,5];
  t.is(first(nums), 1);
  t.deepEqual(first([{ bleh: true }, 'second', 'third']), { bleh: true });
});

test('last', t => {
  const nums = [1,2,3,4,5];
  t.is(last(nums), 5);
  t.deepEqual(last([{ bleh: true }, 'second', 'third']), 'third');
});

test('reduce', t => {
  const nums = [1,2,3,4,5];
  const subtract = (a, b) => a - b;
  t.is(reduce(sum, 0)(nums), nums.reduce(sum, 0));
  t.is(reduce(subtract, first(nums))(nums), nums.reduce(subtract, first(nums))); // Must provide initial value
});

test('reduceRight', t => {
  const nums = [1,2,3,4,5];
  const subtract = (a, b) => a - b;
  t.is(reduceRight(sum, 0)(nums), nums.reduceRight(sum, 0));
  t.is(reduceRight(subtract, first(nums))(nums), nums.reduceRight(subtract, first(nums))); // Must provide initial value
});

test('type', t => {
  t.is(type({}), 'Object');
  t.is(type(1), 'Number');
  t.is(type(false), 'Boolean');
  t.is(type('s'), 'String');
  t.is(type(null), 'Null');
  t.is(type([]), 'Array');
  t.is(type(/[A-z]/), 'RegExp');
  t.is(type(new RegExp('a', 'gmi')), 'RegExp');
  t.is(type(() => {}), 'Function');
  t.is(type(undefined), 'Undefined');
  t.is(type(new Date()), 'Date');
});

test('sort', t => {
  const list = [3, 1, 8, 1, 2, 5];

  t.deepEqual(sort((a, b) => a - b)([3, 1, 8, 1, 2, 5]), [1, 1, 2, 3, 5, 8]);
  t.deepEqual(sort((a, b) => a - b)(list), [1, 1, 2, 3, 5, 8]);
  t.deepEqual(list, [3, 1, 8, 1, 2, 5]);

  const sortByLength = sort((a, b) => a.length - b.length);

  t.deepEqual(
    sortByLength(['one', 'two', 'three', 'four', 'five', 'six']),
   ['one', 'two', 'six', 'four', 'five', 'three']
  );
});

test('includes', t => {
  const list = [3, 1, 8, 1, 2, 5];
  const str = 'hey there you';

  t.true(includes(1)(list));
  t.false(includes(-1)(list));
  t.true(includes('hey')(str));
  t.true(includes('e y')(str));
  t.false(includes('unicorn')(str));
});

test('toString', t => {
  t.is(toString(true), 'true');
  t.is(toString(false), 'false');
  t.is(toString(null), 'null');
  t.is(toString(undefined), 'undefined');
});

test('toUpperCase', t => {
  t.is(toUpperCase('hey'), 'HEY');
  t.is(toUpperCase('HEY'), 'HEY');
  t.throws(() => toUpperCase({}));
  t.throws(() => toUpperCase([]));
  t.throws(() => toUpperCase(null));
  t.throws(() => toUpperCase(undefined));
});

test('toLowerCase', t => {
  t.is(toLowerCase('hey'), 'hey');
  t.is(toLowerCase('HEY'), 'hey');
  t.throws(() => toLowerCase({}));
  t.throws(() => toLowerCase([]));
  t.throws(() => toLowerCase(null));
  t.throws(() => toLowerCase(undefined));
});

test('test', t => {
  t.false(testStr(/\w+/)(''));
  t.true(testStr(/\w+/)('hey'));
});

test('trim', t => {
  t.is(trim('  hey  '), 'hey');
  t.is(trim('  hey\nmore\n'), 'hey\nmore');
});

test('startsWith', t => {
  t.true(startsWith('hey')('hey you'));
  t.false(startsWith('hey')('you hey'));
});

test('endsWith', t => {
  t.false(endsWith('hey')('hey you'));
  t.true(endsWith('hey')('you hey'));
});

test.todo('match');
test.todo('repeat');
test.todo('replace');
test.todo('slice');
test.todo('toPairs');
test.todo('fromPairs');
test.todo('allPass');
test.todo('anyPass');

test('prop', t => {
  t.is(prop('k')({ k: 'hello' }), 'hello');
  t.is(prop('a')({ k: 'hello' }), undefined);

  // Works up the prototype chain
  const F = function(param) {this.x = param;};
  F.prototype.y = 40;
  F.prototype.z = 50;
  const obj = new F(30);
  obj.v = 10;
  obj.w = 20;
  t.is(prop('v')(obj), 10);
  t.is(prop('w')(obj), 20);
  t.is(prop('y')(obj), 40);
  t.is(prop('z')(obj), 50);
});

test('isNil', t => {
  t.true(isNil(undefined));
  t.true(isNil(null));
  t.false(isNil(''));
  t.false(isNil('str'));
  t.false(isNil(0));
  t.false(isNil(true));
  t.false(isNil(false));
  t.false(isNil(new RegExp('', 'gi')));
  t.false(isNil(NaN));
  t.false(isNil({}));
  t.false(isNil([]));
});

test('defaultTo', t => {
  t.deepEqual(map(defaultTo('c'))(['a', 'b', null]), ['a', 'b', 'c']);
});

test('tap', t => {
  const tapped = [];
  let arr = ['a', 'b', 'c'];
  let brr = arr.map(tap(x => tapped.push(x)));

  t.deepEqual(arr, brr);
  t.deepEqual(tapped, arr);
});

test('equals', t => {
  let a = [];
  let b = a;
  // tests for deep equality of its operands
  t.deepEqual(equals(100, 100), true);
  t.deepEqual(equals(100, '100'), false);
  t.deepEqual(equals([], []), true);
  t.deepEqual(equals(a, b), true);

  // considers equal Boolean primitives equal
  t.deepEqual(equals(true, true), true);
  t.deepEqual(equals(false, false), true);
  t.deepEqual(equals(true, false), false);
  t.deepEqual(equals(false, true), false);

  // considers equivalent Boolean objects equal
  t.deepEqual(equals(new Boolean(true), new Boolean(true)), true);
  t.deepEqual(equals(new Boolean(false), new Boolean(false)), true);
  t.deepEqual(equals(new Boolean(true), new Boolean(false)), false);
  t.deepEqual(equals(new Boolean(false), new Boolean(true)), false);

  // never considers Boolean primitive equal to Boolean object
  t.deepEqual(equals(true, new Boolean(true)), false);
  t.deepEqual(equals(new Boolean(true), true), false);
  t.deepEqual(equals(false, new Boolean(false)), false);
  t.deepEqual(equals(new Boolean(false), false), false);

  // considers equal number primitives equal
  t.deepEqual(equals(0, 0), true);
  t.deepEqual(equals(0, 1), false);
  t.deepEqual(equals(1, 0), false);

  // considers equivalent Number objects equal
  t.deepEqual(equals(new Number(0), new Number(0)), true);
  t.deepEqual(equals(new Number(0), new Number(1)), false);
  t.deepEqual(equals(new Number(1), new Number(0)), false);

  // never considers number primitive equal to Number object
  t.deepEqual(equals(0, new Number(0)), false);
  t.deepEqual(equals(new Number(0), 0), false);

  // considers equal string primitives equal
  t.deepEqual(equals('', ''), true);
  t.deepEqual(equals('', 'x'), false);
  t.deepEqual(equals('x', ''), false);
  t.deepEqual(equals('foo', 'foo'), true);
  t.deepEqual(equals('foo', 'bar'), false);
  t.deepEqual(equals('bar', 'foo'), false);

  // considers equivalent String objects equal
  t.deepEqual(equals(new String(''), new String('')), true);
  t.deepEqual(equals(new String(''), new String('x')), false);
  t.deepEqual(equals(new String('x'), new String('')), false);
  t.deepEqual(equals(new String('foo'), new String('foo')), true);
  t.deepEqual(equals(new String('foo'), new String('bar')), false);
  t.deepEqual(equals(new String('bar'), new String('foo')), false);

  // never considers string primitive equal to String object
  t.deepEqual(equals('', new String('')), false);
  t.deepEqual(equals(new String(''), ''), false);
  t.deepEqual(equals('x', new String('x')), false);
  t.deepEqual(equals(new String('x'), 'x'), false);

  // handles objects
  t.deepEqual(equals({}, {}), true);
  t.deepEqual(equals({a:1, b:2}, {a:1, b:2}), true);
  t.deepEqual(equals({a:2, b:3}, {b:3, a:2}), true);
  t.deepEqual(equals({a:2, b:3}, {a:3, b:3}), false);
  t.deepEqual(equals({a:2, b:3, c:1}, {a:2, b:3}), false);

  // considers equivalent Error objects equal
  t.deepEqual(equals(new Error('XXX'), new Error('XXX')), true);
  t.deepEqual(equals(new Error('XXX'), new Error('YYY')), false);
  t.deepEqual(equals(new Error('XXX'), new TypeError('XXX')), false);
  t.deepEqual(equals(new Error('XXX'), new TypeError('YYY')), false);

  // handles regex
  t.deepEqual(equals(/\s/, /\s/), true);
  t.deepEqual(equals(/\s/, /\d/), false);
  t.deepEqual(equals(/a/gi, /a/ig), true);
  t.deepEqual(equals(/a/mgi, /a/img), true);
  t.deepEqual(equals(/a/gi, /a/i), false);

  let listA = [1, 2, 3];
  let listB = [1, 3, 2];
  // handles lists
  t.deepEqual(equals([], {}), false);
  t.deepEqual(equals(listA, listB), false);

  let c = {}; c.v = c;
  let d = {}; d.v = d;
  let e = []; e.push(e);
  let f = []; f.push(f);
  let nestA = {a:[1, 2, {c:1}], b:1};
  let nestB = {a:[1, 2, {c:1}], b:1};
  let nestC = {a:[1, 2, {c:2}], b:1};
  // handles recursive data structures
  t.deepEqual(equals(c, d), true);
  t.deepEqual(equals(e, f), true);
  t.deepEqual(equals(nestA, nestB), true);
  t.deepEqual(equals(nestA, nestC), false);

  // requires that both objects have the same enumerable properties with the same values
  let a1 = [];
  let a2 = [];
  a2.x = 0;

  let b1 = new Boolean(false);
  let b2 = new Boolean(false);
  b2.x = 0;

  let d1 = new Date(0);
  let d2 = new Date(0);
  d2.x = 0;

  let n1 = new Number(0);
  let n2 = new Number(0);
  n2.x = 0;

  let r1 = /(?:)/;
  let r2 = /(?:)/;
  r2.x = 0;

  let s1 = new String('');
  let s2 = new String('');
  s2.x = 0;

  t.deepEqual(equals(a1, a2), false);
  t.deepEqual(equals(b1, b2), false);
  t.deepEqual(equals(d1, d2), false);
  t.deepEqual(equals(n1, n2), false);
  t.deepEqual(equals(r1, r2), false);
  t.deepEqual(equals(s1, s2), false);

  // compares Map objects by value
  t.deepEqual(equals(new Map([]), new Map([])), true);
  t.deepEqual(equals(new Map([]), new Map([[1, 'a']])), false);
  t.deepEqual(equals(new Map([[1, 'a']]), new Map([])), false);
  t.deepEqual(equals(new Map([[1, 'a']]), new Map([[1, 'a']])), true);
  t.deepEqual(equals(new Map([[1, 'a']]), new Map([[1, 'b']])), false);
  t.deepEqual(equals(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'c']])]])), true);
  t.deepEqual(equals(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'd']])]])), false);
  t.deepEqual(equals(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [4, 5, 6]]])), true);
  t.deepEqual(equals(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [7, 8, 9]]])), false);

  // compares Set objects by value
  t.deepEqual(equals(new Set([]), new Set([])), true);
  t.deepEqual(equals(new Set([]), new Set([1])), false);
  t.deepEqual(equals(new Set([1]), new Set([])), false);
  t.deepEqual(equals(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([3])])])), true);
  t.deepEqual(equals(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([4])])])), false);
  t.deepEqual(equals(new Set([[1, 2, 3], [4, 5, 6]]), new Set([[1, 2, 3], [4, 5, 6]])), true);
  t.deepEqual(equals(new Set([[1, 2, 3], [4, 5, 6]]), new Set([[1, 2, 3], [7, 8, 9]])), false);
});

test('partition', t => {
  // splits a list into two lists according to a predicate
  const pred = n => n % 2;
  t.deepEqual(partition(pred)([]), [[], []]);
  t.deepEqual(partition(pred)([0, 2, 4, 6]), [[], [0, 2, 4, 6]]);
  t.deepEqual(partition(pred)([1, 3, 5, 7]), [[1, 3, 5, 7], []]);
  t.deepEqual(partition(pred)([0, 1, 2, 3]), [[1, 3], [0, 2]]);

  const polarize = partition(Boolean);
  t.deepEqual(polarize([true, 0, 1, null]), [[true, 1], [0, null]]);
});

test('pick', t => {
  let obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, 1: 7};

  t.deepEqual(
    pick(['a', 'c', 'f'])(obj),
    {a: 1, c: 3, f: 6},
    'copies the named properties of an object to the new object'
  );

  t.deepEqual(
    pick([1])(obj),
    {1: 7},
    'handles numbers as properties'
  );

  t.deepEqual(
    pick(['a', 'c', 'g'])(obj),
    {a: 1, c: 3},
    'ignores properties not included'
  );

  const F = function(param) {this.x = param;};
  F.prototype.y = 40;
  F.prototype.z = 50;
  obj = new F(30);
  obj.v = 10;
  obj.w = 20;
  t.deepEqual(
    pick(['w', 'x', 'y'])(obj),
    {w: 20, x: 30, y: 40},
    'retrieves prototype properties'
  );
});

test('concat', t => {
  t.deepEqual(concat(['a'])(['b', 'c']), ['a', 'b', 'c']);
  t.is(concat('a')('bc'), 'abc');
});

test('every', t => {
  t.true(every(isEven)([2,4,6]));
  t.false(every(isEven)([1,4,6]));
});

test('some', t => {
  const isEven = x => x % 2 === 0;
  t.true(some(isEven)([2,4,6]));
  t.true(some(isEven)([1,4,6]));
  t.false(some(isEven)([1,3,5]));
});

test('fill', t => {
  t.deepEqual(fill(null)(Array(3)), [null, null, null]);
  t.deepEqual(fill('val')(Array(1)), ['val']);
  t.deepEqual(fill('val')([]), []);
});

test('identity', t => {
  const obj = {a: 1, b: 2, c: 3};
  const arr = ['a', 'b', 'c'];
  t.is(identity('test'), 'test');
  t.is(identity(obj), obj);
  t.is(identity(arr), arr);
  t.is(identity(null), null);
  t.is(identity(), undefined);
});

test('always', t => {
  const obj = {a: 1, b: 2, c: 3};
  const arr = ['a', 'b', 'c'];
  t.is(always('test')(), 'test');
  t.is(always(obj)('many', 'other', 'args'), obj);
  const returnArr = always(arr);
  t.is(returnArr(), arr);
  t.is(returnArr('a', null, 3), arr);
  t.is(always(null)('something'), null);
  t.is(always()(), undefined);
});

test('compose', t => {
  t.is(compose(negate, twice)(2), -4);
  t.is(compose(negate, twice)(2), negate(twice(2)));
  t.is(compose(negate, twice, sum)(2, 3), -10); // Multi arg is fine if the bottom function takes it
  t.is(compose(negate, twice, sum)(2, 3), negate(twice(sum(2, 3))));

  const toUpperAll = map(toUpper);
  let arr = ['hey', 'there', 'you'];

  t.deepEqual(toUpperAll(arr), ['HEY', 'THERE', 'YOU']);

  let str = 'HEY ~ there ~ YOU';

  t.is(compose(
    join('<|>'),
    map(toLower),
    split(' ~ '),
  )(str), 'hey<|>there<|>you');
});

test('pipe', t => {
  t.is(pipe(negate, twice)(2), -4);
  t.is(pipe(negate, x => x * x)(2), 4);
  t.is(pipe(x => x * x, negate)(2), -4);
  t.is(pipe(negate, twice)(2), twice(negate(2)));
  t.is(pipe(sum, twice, negate)(2, 3), -10); // Multi arg is fine if the bottom function takes it

  const toUpperAll = map(toUpper);
  let arr = ['hey', 'there', 'you'];

  t.deepEqual(toUpperAll(arr), ['HEY', 'THERE', 'YOU']);

  let str = 'HEY ~ there ~ YOU';

  t.is(pipe(
    split(' ~ '),
    map(toLower),
    join('<|>'),
  )(str), 'hey<|>there<|>you');
});

test('curry', t => {
  const currySum = curry(sum);
  const add3 = currySum(3);

  t.is(add3(4), 7)
  t.is(add3(4), currySum(3, 4));

  const addMany = curry((a, b, c, d) => a + b + c + d);
  t.is(addMany(1)(2)(3)(4), 10);
  t.is(addMany(1, 2)(3)(4), 10);
  t.is(addMany(1, 2, 3)(4), 10);
  t.is(addMany(1, 2, 3, 4), 10);
});
