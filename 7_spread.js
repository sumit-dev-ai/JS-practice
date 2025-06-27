// case1
const numbers = [1, 2, 3];

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...numbers)); // 6
//------------------------------------------------
//case 2
const num2 = [1, 2, 3,4];

function sum1(a, b, c) {
  return a + b + c;
}

console.log(sum1(...num2)); // 6
//------------------------------------------------
//case3
const num3 = [1, 2];

function sum2(a, b, c) {
  return a + b + c;
}

console.log(sum2(...num3)); // NaN

//--------------------------------------------------
//case4
const num4 = [1, 2, 3];
function sum3(a,b,c)
{
    return a+b;
}
console.log(sum3(...num4)); // 3
//--------------------------------------