/**
 * 题目：
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 示例 1:
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const len = s.length;
    let map = [];
    let max = 0;
    let rightIndex = 0;

    if (len == 1) {
      return 1;
    }

    for (let i = 0; i < len; i++) {
      i !== 0 && map.shift();
      while (rightIndex < len && map.indexOf(s[rightIndex]) === -1) {
        map.push(s[rightIndex]);
        rightIndex += 1;
      }
      max = Math.max(max, rightIndex - i);
    }
    return max;
};

const result = lengthOfLongestSubstring("abcabcbb");
console.log(result);

/**
 * 以 abcabcbb 为例
 * 滑动窗口，左右指针逐步扩大搜素范围
 * 左右指针起始位置均为 0，然后移动右指针，扩大搜索范围，直到遇到重复的字符停下。
 * 遍历过每一个字符收集到数组中用于判断是否是重复字符，这个数组里是没有重复字符的，而且是按照顺序防治的
 * 此时真正不重复的子字符串是起始左指针位置，终止右指针位置减一，因为停下时右指针指的是重复字符位置。
 * 开始与之前的子字符串比较长度，选择最大长度。
 * 那么当前以左指针为起始位置的不重复子字符串寻找完毕，开始移动左指针。
 * 同时将数组第一个字符推出，因为以它为首的子字符串已经遍历完毕。
 */