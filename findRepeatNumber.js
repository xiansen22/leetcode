/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  const map = {};
  if (!nums.length) {
    return;
  }
  let repeatNum;
  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i];
    if (map[num] === undefined) {
      map[num] = true;
    } else {
      repeatNum = num;
      break;
    }
  }
  return repeatNum;
};