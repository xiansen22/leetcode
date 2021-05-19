function flat(list) {
  let result = [];
  for (let i = 0, len = list.length; i < len; i++) {
    const item = list[i];
    if (Array.isArray(item)) {
      result = result.concat(flat(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flat([1, 2, [1, 3, [2, 4, 5]]]));