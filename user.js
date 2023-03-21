class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
// i would need to make an instance called user eh?

function printName(user) {
  console.log(`User's name is ${user.age}`);
}

function printAge(user) {
  console.log(`User is ${user.age} years old`);
}

//move information about User and export it so I can use it in main.js

// 1. Default export
// 2.

// export User class
export default User;
//normal export
export { printName, printAge };
