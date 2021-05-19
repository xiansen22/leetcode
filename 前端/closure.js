var foo = function(...args) {
  let numbers = [...args];
  const closure = function(...args1) {
    numbers = numbers.concat(args1);
    return closure
  }
  closure.getValue = function() {
    const sum = numbers.reduce((prev, next) => {
      return prev + next
    }, 0);
    return sum;
  }
  return closure;
}

var sum = foo(1)(2, 3, 4)(5, 6, 7, 8).getValue();
console.log(sum);