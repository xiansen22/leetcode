/**
 * @param {number} n
 * @return {number}
 */
const cache = {};
var numWays = function(n) {
  if (cache[n] !== undefined) {
    return cache[n];
  };
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 1;
  }
  const result = numWays(n - 1) + numWays(n - 2);
  if (cache[n] === undefined) {
    cache[n] = result;
  }
  return result % 1000000007;
};

console.log(numWays(78));