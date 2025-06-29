
//Module Pattern
const CounterModule = (function () {
  // Private variable
  let count = 0;

  // Private function
  function logCount() {
    console.log("Current count:", count);
  }

  // Public functions
  return {
    increment() {
      count++;
      logCount();
    },
    reset() {
      count = 0;
      logCount();
    },
  };
})();
CounterModule.increment(); // 👉 Current count: 1
CounterModule.increment(); // 👉 Current count: 2
CounterModule.reset();     // 👉 Current count: 0
// const a= CounterModule();      //Error because counterModule isn't a function but an object
const a= CounterModule;    
a.increment();
//---------------------------------------------------------------------

(function () {
  var a = 10;
  console.log(a); //10
})();
console.log(a); // ReferenceError: a is not defined

//--------------------------------------------------------------------------


//Module Pattern
const CountModule = (function () {
  // Private variable
  let count = 0;

  // Private function
  function logCount() {
    console.log("Current count:", count);
  }

  // Public functions
  return {
    increment() {
      count++;
      logCount();
    },
    reset() {
      count = 0;
      logCount();
    },
  };
})();
CountModule.increment(); // 👉 Current count: 1
CountModule.increment(); // 👉 Current count: 2
CountModule.reset();     // 👉 Current count: 0
// const a= CountModule();      //Error because counterModule isn't a function but an object
const c= CountModule;    
c.increment();
//---------------------------------------------------------------------

(function () {
  var a = 10;
  console.log(a); //10
})();
console.log(a); // ReferenceError: a is not defined

//--------------------------------------------------------------------------


