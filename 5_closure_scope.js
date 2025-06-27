function foo() {
  let secret = "123";
  return () => secret;
}
let getSecret = foo();
secret = "456";
console.log(getSecret());
//123
//-----------------------------------------------
function counter() {
  var count = 0;
  return function () {
    return ++count;
  };
}
const c1 = counter();
const c2 = counter();
console.log(c1()); // 1
console.log(c2()); // 1

//---------------------------------------------
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);     //3 3 3
}
//-------------------------------------------
function makeAdder(x) {
  return function(y) {
    return x + y;
  }
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);
console.log(add5(2));   // ?
console.log(add10(2));  // ?

// output; 7 12
