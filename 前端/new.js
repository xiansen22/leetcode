function Person({ name, age }) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayName = function() {
  console.log('person', this.name);
}


function Animal({ name, age }) {
  const obj = new Person({ name, age });
  obj.name = name;
  obj.age = age;
  return obj;
}

Animal.prototype.sayName = function() {
  console.log('animal', this.name);
}

const xm = new Person({name: 'xm', age: 18});
const dog = new Animal({name: 'xh', age: 2})
xm.sayName(); // person xm
dog.sayName(); // person xh