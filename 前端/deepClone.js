function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1).toLocaleLowerCase();
}

function getRegExp(target) {
  if (target.global) {
    return 'g';
  }
  if (target.ignoreCase) {
    return 'i';
  }
  if (target.multiline) {
    return 'm';
  }
}

function deepClone(target) {
  return _deep(target);
}

const childs = [];
const parents = [];

function _deep(target) {
  if (!target || typeof target !== 'object') {
    return target;
  }

  let child;
  const type = getType(target);
  if (type === 'array') {
    child = [];
  } else if (type === 'date') {
    return new Date(target.getTime())
  } else if (type === 'regexp') {
    child = new RegExp(target.source, getRegExp(target));
    if (parent.lastIndex) {
      child.lastIndex = child.lastIndex;
    }
    return child;
  } else {
    const proto = Object.getPrototypeOf(target);
    child = Object.create(proto);
  }

  const index = parents.indexOf(target);
  if (index !== -1) {
    return childs[index];
  }

  for (key in target) {
    child[key] = _deep(target[key])
  }

  parents.push(target);
  childs.push(target);

  return child;
}

var a = {
  c: {
    c: 1
  }
}
const obj = deepClone(a);
console.log(obj, obj === a);
console.log(deepClone(new Date()));