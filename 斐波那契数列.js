/**
 * @param {number} n
 * @return {number}
 */
const cache = {};
var fib = function(n) {
  if (cache[n] !== undefined) {
    return cache[n];
  };
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  const result = fib(n - 1) + fib(n - 2);
  if (cache[n] === undefined) {
    cache[n] = result;
  }
  return result % 1000000007;
};

console.log(fib(5));