// getters and setters

class Square {
  constructor(width) {
    this.width = width;
    this.height = width;
    this.numOfRequestsForArea = 0;
  }
  // behaves as if it's a method
  get area() {
    this.numOfRequestsForArea++;
    return this.width * this.height;
  }

  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }
}

let square1 = new Square(4);
// no () so looks like a property!
// calling the getter !
console.log(square1.area);

square1.area = 25;

console.log(square1.width);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);

console.log(square1.numOfRequestsForArea);

Static methods

class Square {
  constructor(width) {
    this.width = width;
    this.height = width;
  }
  //define static method
  static equals(a, b) {
    return a.width * a.height === b.width * b.height;
  }

  static isValidDimensions(width, height) {
    return width === height;
  }
}

let square1 = new Square(8);
let square2 = new Square(8);
// call the static method on Square , doesn't require instance
// console.log(Square.equals(square1, square2));

//static method is like a helper function?
console.log(Square.isValidDimensions(7, 6));

//////Inheritance and Extends

Parent and Child Class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // new method!
  describe() {
    console.log(`i am ${this.name} and i am ${this.age}`);
  }
}
// this programmer class not only have access to instance properties
// but also to the describe method
class Programmer extends Person {
  constructor(name, age, yearsOfExperience) {
    // calls the parent class
    super(name, age);
    // Custom behavior of Programmer
    this.yearsOfExperience = yearsOfExperience;
  }
  // more method!
  code() {
    console.log(`${this.name}is coding`);
  }
}

let person1 = new Person('jeff', 45);
let programmer1 = new Programmer('dom', 56, 12);

// // person1.code(); //ERROR
// programmer1.code(); // WORKS!
// programmer1.describe(); //WORKS!!!! programmer is the child

// console.log(person1);
// console.log(programmer1);

const programmers = [
  new Programmer('Dom', 56, 12),
  new Programmer('Jeff', 24, 4),
];

function developSoftware(programmers) {
  for (let programmer of programmers) {
    programmer.code();
  }
}

developSoftware(programmers);

//////// Polymorphism
Redefining a method inside a derived .. what

class Animal {
  constructor(name) {
    this.name = name;
  }
  // method that i'm gonna overwrite to use polymorphism
  // method that is present in a private class Animal
  makeSound() {
    console.log('generic animal sound');
  }
}

// Let's create a child class of Animal class
// and overwrite makeSound method!

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    super.makeSound(); // generic behavior
    console.log('woof woof'); // and special functionality
  }
}

const a1 = new Animal('dom');
a1.makeSound();

const a2 = new Dog('jeff');
a2.makeSound(); // woof woof , overwriting the method in the parent class!

// Now calling super in the overwritten method

//////////////////////////
HTML List Binding
Create Class that manipulate DOM


