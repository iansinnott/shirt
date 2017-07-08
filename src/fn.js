export const identity = x => x;
export const always = x => () => x;

/**
 * NOTE: recursiveArgs is used in the recursive case, but will generally not be
 * used in the initial invocation by the user
 *
 * Although this is not taken from Ramda their original approach might be worth
 * a look if refactoring:
 * https://github.com/ramda/ramda/blob/v0.5.0/ramda.js#L297-L309
 */
export const curryN = (n, f, recursiveArgs = []) => (...innerArgs) => {
  const curryArgs = recursiveArgs.concat(innerArgs);

  if (curryArgs.length >= n) {
    return f(...curryArgs.slice(0, n));
  } else {
    return curryN(n, f, curryArgs);
  }
};

export const curry = f => curryN(f.length, f);

export const compose = (...fs) =>
  fs.reduce((f, g) => (...args) => f(g(...args)));

export const pipe = (...fs) =>
  fs.reduceRight((f, g) => (...args) => f(g(...args)));

// "Dispatchers" like this just call out to the underlying method. So they
// should work on anything with a collection interface
export const concat = a => b => a.concat(b);
export const every = f => xs => xs.every(f);
export const some = f => xs => xs.some(f);
export const fill = v => xs => xs.fill(v);
export const filter = f => xs => xs.filter(f);
export const find = f => xs => xs.find(f);
export const findIndex = f => xs => xs.findIndex(f);
export const forEach = f => xs => xs.forEach(f);
export const indexOf = v => xs => xs.indexOf(v);
export const join = by => xs => xs.join(by);
export const split = by => str => str.split(by);
export const lastIndexOf = v => xs => xs.lastIndexOf(v);
export const map = f => xs => xs.map(f);
export const reduce = (f, initial) => xs => xs.reduce(f, initial);
export const reduceRight = (f, initial) => xs => xs.reduceRight(f, initial);
export const includes = v => xs => xs.includes(v);

export const toString = v => {
  if (isNil(v)) {
    return toLower(type(v));
  } else if (type(v.toString) === 'Function') {
    return v.toString();
  } else {
    // Can't honestly think of what would get to this, but its JS so i'm sure
    // there's something
    throw new Error(`Could not stringify ${v}`);
  }
};

// This is not technically a dispatcher since its functionality does differ from
// standard JS. It creates a copy of the array before sorting it so the original
// array remains the way it was.
export const sort = f => xs => xs.slice().sort(f); // Non-mutative. f :: a, b -> Number

// String
export const toUpperCase = str => str.toUpperCase();
export const toLowerCase = str => str.toLowerCase();
export const match = re => str => str.match(re);
export const repeat = n => str => str.repeat(n);
export const replace = (re, v) => str.replace(re, v);
export const slice = (a, b) => xs => xs.slice(a, b);
export const startsWith = v => str => str.startsWith(v);
export const endsWith = v => str => str.endsWith(v);
export const trim = str => str.trim();

// RegExp
export const test = re => str => re.test(str);

// These are all made up, but common enough
export const toUpper = toUpperCase;
export const toLower = toLowerCase;
export const toPairs = null;
export const fromPairs = null;
export const prop = k => xs => xs[k];
export const isNil = x => x === undefined || x === null;
export const defaultTo = v => x => isNil(x) ? v : x;
export const tap = f => x => { f(x); return x; };
export const allPass = null;
export const anyPass = null;
export const type = x => {
  return x === null ? 'Null' :
         x === undefined ? 'Undefined' :
         Object.prototype.toString.call(x).slice(8, -1);
};

// Deep equals. This one is take straight from ramda. I was going to write my
// own but this is a pretty important one and they are doing a lot of stuff I
// wasn't going to bother with. So, for now we'll just use theirs. Minus the
// overhead of the rest of ramda.
export const equals = (a, b) => _equals(a, b, [], []);

export const complement = f => (...args) => !f(...args);

export const head = ([x, ...xs]) => x;
export const first = head;
export const last = arr => arr[arr.length - 1];

export const partition = f => xs => {
  return [
    xs.filter(f),
    xs.filter(complement(f))
  ];
};

export const pick = keys => obj => {
  return keys.reduce((agg, k) => {
    if (obj[k]) {
      agg[k] = obj[k];
    }
    return agg;
  }, {});
};

/* Helpers
 * ======================================================================= */

const _arrayFromIterator = (iterator) => {
  const result = [];
  let next;
  while (!(next = iterator.next()).done) {
    result.push(next.value);
  }
  return result;
};

const _functionName = f => f.name;

const _has = (prop, obj) => Object.prototype.hasOwnProperty.call(obj, prop);

// Not sure what was going on here, but _equals wants it...
const _identical = (a, b) => {
  return (a === b)
    ? (a !== 0 || 1 / a === 1 / b)
    : (a !== a && b !== b);
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
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) &&
           typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) &&
           typeof b.equals === 'function' && b.equals(a);
  }

  switch (type(a)) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' &&
          _functionName(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && _identical(a.valueOf(), b.valueOf()))) {
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
      if (!(a.source === b.source &&
            a.global === b.global &&
            a.ignoreCase === b.ignoreCase &&
            a.multiline === b.multiline &&
            a.sticky === b.sticky &&
            a.unicode === b.unicode)) {
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
