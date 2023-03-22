export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
// i would need to make an instance called user eh?

export function printName(user) {
  console.log(`User's name is ${user.age}`);
}

export function printAge(user) {
  console.log(`User is ${user.age} years old`);
}

//move information about User and export it so I can use it in main.js

// 2. export inline
