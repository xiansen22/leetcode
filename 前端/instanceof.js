/**
 * 用来判断实例是否属于某个构造函数
 */
function instanceOf(obj, target) {
  if (typeof target !== 'function') {
    throw new Error('instanceOf 第二个参数应为函数类型')
  }

  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return false;
  }

  let result = false;
  const prototype = target.prototype;
  while(obj.__proto__) {
    if (prototype === obj.__proto__) {
      result = true;
      break;
    }
    obj = obj.__proto__;
  }
  return result;
}

function Person({ name, age }) {
  this.name = name;
  this.age = age;
}

const xm = new Person({name: 'xm', age: 18});
console.log(instanceOf(xm, Person));

