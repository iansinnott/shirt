import test from 'ava';

import { compose, curry } from './helpers.js';

const split = (by) => (str) => str.split(by);
const join = (by) => (str) => str.join(by);
const map = (f) => (arr) => arr.map(f);
const toUpper = (str) => str.toUpperCase();
const toLower = (str) => str.toLowerCase();
const sum = (a, b) => a + b;
const twice = (a) => a + a; // NOTE: `double` is a reserved word
const negate = (a) => a * -1;

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

