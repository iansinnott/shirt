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

export const curry = (f) => curryN(f.length, f);

export const compose = (...fs) =>
  fs.reduce((f, g) => (...args) => f(g(...args)));
