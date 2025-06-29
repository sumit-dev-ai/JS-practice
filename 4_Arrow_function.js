
const showArgss = () => {
  console.log(arguments); //  ReferenceError
};
//---------------------------------------------------------------------
const carr = () => {};
const myCarr = new carr(); //  Error
//---------------------------------------------------------------------
const person1 = {
  name: "Sumit",
  greet: () => {
    console.log("Hello " + this.name);  //  'this' does not refer to the person object
  }
};
// Hello undefined
//---------------------------------------------------------------------

//  Q3: Identify the error and correct it

// const getObject = () => {
//   name: "Sumit",
//   agee 22;
// }
//++++++++++Answer+++++++++++++++++
// const getObject = () => ({
//   name: "Sumit",
//   age: 22;
// });
//---------------------------------------------------------------------
function Counter() {
  let count = 0;
  return {
    inc: () => ++count,
    dec: () => --count,
    get: () => count
  };
}

const co = Counter();
co.inc(); // 1
co.inc(); // 2
co.dec(); // 1
console.log(co.get()); // 1
//---------------------------------------------------------------------

//closure helps in data hiding and reusability of code

function secretBox() {
  let secret = "hidden";

  return {
    getSecret: () => secret,
    setSecret: (val) => { secret = val; }
  };
}

const boxx = secretBox();
console.log(boxx.getSecret()); // "hidden"
boxx.setSecret("opened");
console.log(boxx.getSecret()); // "opened"

const showArgs = () => {
  console.log(arguments); // ❌ ReferenceError
};
//---------------------------------------------------------------------
const Car = () => {};
const myCar = new Car(); // ❌ Error
//---------------------------------------------------------------------
const person = {
  name: "Sumit",
  greet: () => {
    console.log("Hello " + this.name);  // ❌ 'this' does not refer to the person object
  }
};
// Hello undefined
//---------------------------------------------------------------------

//  Q3: Identify the error and correct it

// const getObject = () => {
//   name: "Sumit",
//   agee 22;
// }
//++++++++++Answer+++++++++++++++++
// const getObject = () => ({
//   name: "Sumit",
//   age: 22;
// });
//---------------------------------------------------------------------
function Counter() {
  let count = 0;
  return {
    inc: () => ++count,
    dec: () => --count,
    get: () => count
  };
}

const c = Counter();
c.inc(); // 1
c.inc(); // 2
c.dec(); // 1
console.log(c.get()); // 1
//---------------------------------------------------------------------

//closure helps in data hiding and reusability of code

function secretBox() {
  let secret = "hidden";

  return {
    getSecret: () => secret,
    setSecret: (val) => { secret = val; }
  };
}

const box = secretBox();
console.log(box.getSecret()); // "hidden"
box.setSecret("opened");
console.log(box.getSecret()); // "opened"

