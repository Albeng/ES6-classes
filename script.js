/*function PersonConstructor(name, age) {
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
person3.sayHello(); */

/*class Animal {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age
    }

    introduce() {
        console.log(`Hi, my name is ${this.name}. I'm a ${this.species} and I'm ${this.age} years old`);
}

birthday() {
    this.age++;
    }
}

const animal1 = new Animal("Fluffy", "cat", 2);
const animal2= new Animal("Buddy", "dog", 4);
const animal3 = new Animal("Chirpy", "bird", 1);

animal1.introduce();
animal2.introduce();
animal3.introduce();

animal2.birthday();
console.log(`It's ${animal2.name}'s birthday!`);
animal2.introduce(); */


class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        console.log(`This is a ${this.make} ${this.model} from ${this.year}.`)
    }
}

class Car extends Vehicle{
    constructor(make, model, year, numOfDoors){
        super(make, model, year);
        this.numOfDoors = numOfDoors;
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, numOfDoors, batteryCapacity) {
        super(make,model, year, numOfDoors);
        this.batteryCapacity = batteryCapacity;
    }

    getDescription() {
        console.log(`This is an electric ${this.make} ${this.model} from ${this.year} with ${this.batteryCapacity} battery capacity`);
    }
}

const myElectricCar = new ElectricCar("Tesla", "Model 3", 2022, 4, 82);
myElectricCar.getDescription();

