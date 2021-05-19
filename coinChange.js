/**
 * 给定不同面额的硬币 coins 和一个总金额 amount。
 * 编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 */

var coinChange = function(coins, amount) {
  const cache = {};
  function dp(amount) {
    if (cache[amount]) {
      return cache[amount];
    }
    if (amount < 0) {
      return -1;
    }
    if (amount === 0) {
      return 0;
    }
    let res = Number.MAX_VALUE;
    for (let i = 0, len = coins.length; i < len; i++) {
      const subproblme = dp(amount - coins[i]);
      if (subproblme === -1) {
        continue;
      }
      res = Math.min(res, subproblme + 1);
    }
    if (res === Number.MAX_VALUE) {
      res = -1;
    }
    cache[amount] = res;
    return res;
  }
  return dp(amount);
};

const res = coinChange([2], 3);
console.log(res);