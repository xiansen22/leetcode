function nsum(list, n, start, target) {
  const len = list.length;
  const res = [];
  if (n < 2) {
    return res;
  }
  if (n === 2) {
    let startIndex = start;
    let endIndex = len - 1;
    while (startIndex < endIndex) {
      const startItem = list[startIndex];
      const endItem = list[endIndex];
      const sum = startItem + endItem;

      if (sum < target) {
        while (startIndex < endIndex && list[startIndex] === startItem) {
          startIndex++;
        }
      } else if (sum > target) {
        while (endIndex > startIndex && list[endIndex] === endItem) {
          endIndex--;
        }
      } else {
        res.push([startIndex, endIndex]);
        while (startIndex < endIndex && list[startIndex] === startItem) {
          startIndex++;
        }
        while (endIndex > startIndex && list[endIndex] === endItem) {
          endIndex--;
        }
      }
    }
  } else {
    for (let i = start; i < len; i++) {
      const extral = nsum(list, n - 1, i + 1, target - list[i]);
      if (extral.length !== 0) {
        res.push([i].concat(extral[0]));
        while (i < len && list[i] === list[i]) {
          i++;
        }
      }
    }
  }
  return res;
}

function sum(list, n, target) {
  list = list.sort((prev, next) => {
    return prev - next;
  });
  const res = nsum(list, n, 0, target);
  return res;
}

const res = sum([-1, 0, 1, 1, 3, 4, 5, 17, 39, 324], 2, 0);
console.log(res);