let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  start: function() {
    console.log("Car is starting...");
  }
};

console.log(car.brand);   // Toyota
car.start();              // Car is starting...
console.log(typeof car.start)// function

//-----------------------------------------
console.log("-----------------using new Object()-----------------------------")
//using new Object()
let student = new Object();
student.name = "John";
student.age = 18;
student.sayHi = function() {
  console.log("Hi!");
};

console.log(student.name);  // John
student.sayHi();            // Hi!
console.log(student);

//--------------------------------------------------------
console.log("-------------Using Constructor Function-------------------");
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, I'm " + this.name);
    };
}

let p1 = new Person("Sumit", 23);
let p2 = new Person("Kartik", 30);

p1.greet();  
p2.greet();  
//---------------------------------------------------------------------------
console.log("-------------Using Object.create()-------------------");
let animal = {
    speak: function() {
        console.log("Animal speaks");
    }
};

let dog = Object.create(animal);
dog.breed = "Labrador";

dog.speak();  // Animal speaks
console.log(dog.breed);
//---------------------------------------------------------------------------
console.log("-------------Using ES6+ class-------------------");
class person1 {
    constructor(name, age) {
        this.name = name;
    this.age = age;
}

sayHi() {
    console.log("Hi, I'm " + this.name);
}
}

let p3 = new person1("Sumit", 30);
p3.sayHi();  // Hi, I'm Sumit
console.log("-------------Dynamic Key-------------------");
// Dynamic keys mean you use a variable to set or access a property key in an object 
// — not a fixed name like "name" or "age", but a value stored in a variable.
let key = "city";
let value = "Delhi";

let user = {
  name: "Alice",
  [key]: value  // Dynamic key using variable
};

console.log(user);        // { name: 'Alice', city: 'Delhi' }
console.log(user[key]);   // Delhi
console.log(user["city"]);   // Delhi
console.log(user.city);   // Delhi


let prop = "age";

let std1 = {
  name: "John",
  age: 18
};

console.log(std1[prop]);     // 18 (same as student["age"])
//-------------------------------------------------------
//Delete Does not delete inherited properties
let parent = { a: 1 };
let child = Object.create(parent);

console.log(child.a);     // 1 (inherited)
console.log(delete child.a)  ;         // false – nothing to delete
console.log(child.a);     // still 1
