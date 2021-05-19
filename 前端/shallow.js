/**
 * 浅克隆
 */
function shallowClone(target) {
  if (!target || typeof target !== 'object') {
    return target;
  }
  var obj = {};
  for (key in obj) {
    obj[key] = target[key]
  }
  return obj;
}

const a = 1;
console.log(shallowClone(a));