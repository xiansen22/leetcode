/**
 * 题目： 假设你正在爬楼梯。需要 n 阶你才能到达楼顶
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 * 
 * 示例
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶 
 */

var climbStairs = function(n) {
  let x = 0; // n - 2
  let y = 0; // n - 1
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      x = 1;
    }
    ans = x + y;
    y = x;
    x = ans;
  }
  return ans;
};

const result = climbStairs(5)

console.log(result);