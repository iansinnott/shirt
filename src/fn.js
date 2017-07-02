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
export const sort = f => xs => xs.sort(f); // f :: a, b -> Number
export const includes = v => xs => xs.includes(v);
export const toString = v => v.toString();

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
export const equals = null; // Deep equals

export const complement = f => (...args) => !f(...args);

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

