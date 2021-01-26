/**
 * 题目：最长回文子串
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const len = s.length;
  const dp = [];
  let begin = 0;
  let maxLen = 1;

  if (len < 2) {
    return s;
  }

  for (let i = 0; i < len; i++) {
    if (dp[i] === undefined) {
      dp[i] = [];
    }
    dp[i][i] = true;
  }

  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] !== s[j]) { // 首尾不同
        dp[i][j] = false;
      } else { // 首尾相同
        if (j - i < 3) { // 最小子串
          dp[i][j] = true;
        } else { // 不是最小子串，看最大子串是否是回文子串
          dp[i][j] =  dp[i + 1][j - 1]
        }
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }
  return s.substr(begin, maxLen);
};

const result = longestPalindrome("abcba");
console.log(result);