let uid = 0;

class Dep {
  static Target
  constructor() {
    this.id = uid++;
    this.subs = [];
  }
  addSubs() {

  }
  depend() {

  }
}

function definedReactive(obj, key, value) {
  const dep = new Dep();
  const property = Object.getOwnPropertyDescriptor(obj, key);
  const getter = property && property.get;
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      const val = getter ? getter.call(obj) : value;
      console.log(val);
      return val;
    },
    set: function(newValue) {
      value = newValue;
    }
  })
}

const obj = {
  key: 'xcx'
}

definedReactive(obj, 'key', 'xcx');
obj.key = 2;
obj.key;
