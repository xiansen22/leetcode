/*
 * 题目：
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 
 * 示例:
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
*/

/**
 * 暴力破解法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumA = function(nums, target) {
  const len = nums.length;
  let list = [];
  for (let i = 0; i < len; i++) {
    const addend = nums[i];
    const diff = target - addend;
    for (let k = i + 1; k < len; k++ ) {
      const other = nums[k];
      if (other === diff) {
        list = [i, k];
        break;
      }
    }
    if (list.length === 2) {
      break;
    }
  }
  return list;
};

/**
 * Map
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumB = function(nums, target) {
  const len = nums.length;
  const numMap = {};
  let list = [];
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (numMap[item] !== undefined) {
      numMap[item].push(i);
    } else {
      numMap[item] = [i]; 
    }
  }
  try {
    for (let addend in numMap) {
      const index = numMap[addend][0];
      let diff = target - addend;
      if (numMap[diff] && list.length === 0) {
        let diffIndex = numMap[diff][0];
        if (diff == addend) {
          list.push(numMap[addend][0], numMap[addend][1]);
          throw Error();
        } else {
          list.push(index, diffIndex);
          throw Error();
        }
      }
    }
  } catch (err) {

  }
  
  return list;
};

const list = twoSumB([1, 1, 1, 334, 3, 323, 1], 2);
console.log(list);