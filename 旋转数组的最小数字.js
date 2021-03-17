/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  let left = 0;
  let right = numbers.length - 1;
  let middleSit;
  let res;
  while (left < right) {
    middleSit = left + Math.floor((right - left) / 2);
    const middle = numbers[middleSit];
    const leftItem = numbers[left];
    const rightItem = numbers[right];
    if (middle < rightItem) {
      right = middleSit;
    } else if (middle > rightItem) {
      left = middleSit + 1;
    } else {
      right -= 1;
    }
  }
  return numbers[left];
};
console.log(minArray([3, 1, 1, 1]));