function arraySlice(target) {
  return Array.prototype.slice.call(target);
}

Function.prototype.call = function() {
  const args = arraySlice(arguments);
  const context = args[0] || window;
  const extralArgs = args.slice(1);

  context.fnc = this;
  const res = extralArgs.length !== 0 ? context.fnc(...extralArgs) : context.fnc();
  delete context.fnc;
  return res;
}