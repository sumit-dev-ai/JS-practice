console.log(typeof foo);        //undefined
var foo = "hello";
//reason: variable declarations are hoisted to the top of their scope and initalized with undefined


// -------------------------------------------------------------------------------

console.log(a);             //ReferenceError: Cannot access 'a' before initialization
let a = 5;
//reason: let declarations are not hoisted in the same way as var, so this will throw a ReferenceError

// -------------------------------------------------------------------------------
let a1 = 5;
(function () {
  console.log(a1); // ❌ ReferenceError
  let a1 = 10;
})();
// Even though it's in a new scope, a is hoisted inside the IIFE and lives in TDZ → error!

// -------------------------------------------------------------------------------

const obj = { name: "John" };
obj.name = "Alice";      // ✅ OK (mutating the object)
obj = { name: "Mike" };  // ❌ TypeError

// -------------------------------------------------------------------------------
var a2 = 5;
if (true) {
  var a2 = 10;
}
console.log(a2); // 10
// reason: var is function-scoped or globally scoped, so the variable is shared across the block

// -------------------------------------------------------------------------------