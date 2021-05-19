function twoSum(list, target, start, end) {
  let result = [];

  for (let i = start; i < end; i++) {
    const item = list[i];
    const other = target - item;
    for (let k = i + 1; k < end; k++) {
      const otherItem = list[k];
      if (otherItem === other) {
        result = [i, k]
        break;
      }
    }
  }
  return result;
}

function threeSum(list, target) {
  const len = list.length;
  let result = [];
  
  for (let i = 0; i < len; i++) {
    const item = list[i];
    const other = target - item;
    const otherResult = twoSum(list, other, i + 1, len);
    if (otherResult.length !== 0) {
      result = [i].concat(otherResult);
      break;
    }
  }
  return result;
}

const res = threeSum([0, -1, 1, 1, 2, 3, 4, 100, 24], 103);

console.log(res);