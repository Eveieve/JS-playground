var a = 10;

function b() {
  var x = 10;
}
console.log(window.a);

console.log(a); // assumes it's in the global space.
console.log(this.a);
// console(x); // error
