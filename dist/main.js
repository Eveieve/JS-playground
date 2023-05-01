function C() {}

const c = new C();

console.log(c instanceof C);

console.log(c.constructor === C);

//Change prototype
C.prototype = { prototype_prop: "hello" };
console.log(c.constructor === C);
console.log(c instanceof C); //false !

// c instanceOf C means 'at this moment, the prototype C will use if its' inovoked as a constructor'

function MyObject(data) {
  this.data = data;
}

MyObject.prototype = {
  getData: function () {
    return this.data;
  },
};

let o = new MyObject("data");
