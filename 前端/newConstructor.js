function toArray(target) {
  return Array.prototype.slice.call(target)
}

function newFn() {
  const slice = Array.prototype.slice;
  const args = slice.call(arguments);

  const consturctor = args[0];
  const extralArgs = args.slice(1);

  const prototype = consturctor.prototype;
  const obj = Object.create(prototype);
  const res = consturctor.apply(obj, extralArgs);
  if (typeof res === 'object') {
    return res;
  }
  return obj;
}

function Person({ name, age}) {
  this.name = name;
  this.age = age;
}

const xm = newFn(Person, { name: 'xm', age: 18 });
console.log(xm.name);