function PersonConstructor(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  };
}

function personFactory(name, age) {
  const sayHello = () => {
    console.log(`Hello, my name is ${name} and I'm ${age} years old`);
};

  return { name, age, sayHello };
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  };
}

const person1 = new PersonConstructor("Alvin", 22);
person1.sayHello();

const person2 = personFactory("Ruth Joy", 18);
person2.sayHello();

const person3 = new Person("luis", 13);
person3.sayHello();
