// Object Creation

//1. Object constructor ,not recommended
let obj1 = new Object();

//2. create method takes proptotype as parameter

let obj2 = Object.create({ name: "sharan" });
let obj3 = Object.create(null);

// console.log(obj2.name);

//3. literal syntax (same as line 9 )
let obj4 = {};

// 4. function constructor

function Person(name) {
  this.name = name;
}

let obj5 = new Person("sharan");
// console.log(obj5.name);

//5. Function constructor with prototype:

function Person2() {}
Person2.prototype.name = "sharan";

function func(x, y, z) {}
let person = new func();
let newInstance = Object.create(func.prototype);
let result = func.call(newInstance, 1, 2, 3);
console.log(result && typeof result === "object" ? result : newInstance);

//6. class based syntax

class Person3 {
  constructor(name) {
    this.name = name;
  }
}

let obj6 = new Person3("sharan");

//6. Singleton

let obj7 = new (function () {
  this.name = "sharan";
})();

console.log(obj7);
