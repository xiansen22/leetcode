function arraySlice(target) {
  return Array.prototype.slice.call(target);
}

Function.prototype.apply = function() {
  const args = arraySlice(arguments);
  const context = args[0] || window;
  const extralArgs = args.slice(1);
  context.fn = this;
  const res = extralArgs[1] ? context.fn(...extralArgs[1]) : context.fn();
  delete context.fn;
  return res;
}

const obj = {
  name: 'hy'
}

function say() {
  console.log(this.name, arraySlice(arguments));
}

say.call(obj, 1, 2, 3)
