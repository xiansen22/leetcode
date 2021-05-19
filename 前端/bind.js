function ArraySlice(target) {
  return Array.prototype.slice.call(target);
}

Function.prototype.bind = function(context) {
  const fn = this;
  const extralArgs = ArraySlice(arguments).slice(1)
  const bound = function() {
    const args = extralArgs.concat(ArraySlice(arguments));
    return fn.apply(context, args);
  }
  bound.prototype = fn.prototype;
  return bound;
}

const obj = {
  name: 'hy'
}
function say() {
  console.log(ArraySlice(arguments), this.name);
}
const bind = say.bind(obj);