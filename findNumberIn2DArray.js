/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  let result = false;
  for (let i = 0, len = matrix.length; i < len; i++) {
    const nums = matrix[i];
    const first = nums[0];
    const last = nums[nums.length - 1];
    if (target === first || target === last) {
      result = true;
      break;
    }
    if (target > first && target < last) {
      result = nums.indexOf(target) !== -1;
      if (result) {
        break;
      }
    }
  }
  return result;
};

const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
const target = 5;
const result = findNumberIn2DArray([[-1,3]], 3);
console.log(result);