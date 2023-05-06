const proto = {
  breed: "puddle", // remember? object literal syn tax is :
  bark() {
    console.log("woof woof");
    return "woof returned"; // then it's not undefined
  },
};
// this is a factory using the above object literal!
const factoryDog = () => Object.create(proto);

// create an factoryDog object with this object literal!
const dog1 = factoryDog();
console.log(dog1);
dog1.c = "ddubi"; // set a new variable
console.log(dog1); // not an object with c property's value 'ddubi'
console.log(dog1.c);
console.log(dog1.bark()); // dog1 is an object(instance) created with factoryDog.
// dog1 object has a method in it!
console.log(dog1.breed);
dog1.breed = "not puddle"; //reset the breed variable
console.log(dog1);
console.log(dog1.breed); // breed is not puddle

const rocketShipFactory = (c) => {
  const color = c; // variable 'color' is c, which will be passed when called.
  const name = "zey";
  const useName = () => console.log`logging ${name} what is this`;
  return {
    useName,
    fly() {
      // both syntax for methods - are fine.
      console.log(`The ${color} rocketship has launched`);
    },
    land: () => console.log(`The ${color} rocketship has landed`),
    color,
  };
};

const r2 = rocketShipFactory("pink");
console.log(r2);
console.log(r2.fly());
console.log(r2.color); // 'pink'
console.log(r2); // is an instance made with factory , with 'pink' argument

// r2.name = "changed!";
// console.log(r2); // name is now 'changed!''
// console.log(r2.name);
console.log(r2.name); // name is not accessible bc not defined!
console.log(r2);

console.log(r2.useName); // literally prints out the function
console.log(r2.useName());
