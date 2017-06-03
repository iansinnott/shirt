import test from 'ava';
import {
  Either,
  IO,
} from './src';

// Helpers

const id = x => x;
const always = x => () => x;
const tap = f => x => {
  f(x);
  return x;
};

// Tests

test('Either', t => {
  const { tryCatch, fromNullable, Right, Left, either } = Either;
  const runEither = either(always('caught'), id);

  const willThrow = () => { throw new Error('Expected error'); };

  t.true(tryCatch(willThrow).isLeft);
  t.false(tryCatch(willThrow).isRight);
  t.true(tryCatch(() => 'innocuous').isRight);
  t.false(tryCatch(() => 'innocuous').isLeft);

  tryCatch(willThrow).fold(err => {
    t.true(err instanceof Error);
    t.is(err.message, 'Expected error');
  }, id);

  const maybeErr = tryCatch(willThrow).foldOr(id);
  t.true(maybeErr instanceof Error);
  t.is(maybeErr.message, 'Expected error');

  tryCatch(() => 'innocuous').fold(id, x => {
    t.is(x, 'innocuous');
  });

  t.is('innocuous', tryCatch(() => 'innocuous').foldOr(always('caught')));
});

test('IO', t => {
  const runIO = Either.either(always('caught'), id);

  // Catches errors
  t.is('caught', IO.of(8)
    .map(x => x.toLowerCase())
    .fold(always('caught'), id));

  // Catches errors using foldOr
  t.is('caught', IO.of(8)
    .map(x => x.toLowerCase())
    .foldOr(always('caught')));

  // Works as expected
  t.is('str', IO.of('STR')
    .map(x => x.toLowerCase())
    .fold(always('caught'), id));

  // Works as expected using foldOr
  t.is('str', IO.of('STR')
    .map(x => x.toLowerCase())
    .foldOr(always('caught')));

  let interim;

  // Delayed execution
  const willLeft = IO.of('STR')
    .map(x => x.toLowerCase())
    .map(tap(x => (interim = x)))
    .map(x => 8)
    .map(x => x.toLowerCase())
    .map(tap(x => (interim = 'nope'))); // Never gets run

  t.is(interim, undefined);
  t.is('caught', willLeft.fold(always('caught'), id));
  t.is(interim, 'str');

  // Chainable
  const io1 = IO(() => 'first').map(x => x.toUpperCase())
  const io2 = IO(() => 'second');

  t.is(runIO(io1), 'FIRST');
  t.is(runIO(io2), 'second');

  const io3 = io1.chain(x =>
    io2.map(y => x + y))

  t.is(runIO(io3), 'FIRSTsecond');
});
