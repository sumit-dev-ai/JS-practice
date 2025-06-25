if ("0") {
  console.log("Yes");
} else {
  console.log("No");
}
// Output: Yes


// -------------------------------------------------------------------------------
let x = 5;

if (x == "5") {
    console.log("Loose");
} else {
    console.log("Strict");
}
// Output: Loose
// -------------------------------------------------------------------------------

let a = 0;

if (a) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// Output: Falsy

// -------------------------------------------------------------------------------
let a2 = 0;
let b = "Hello";

if (a2 || b) {
  console.log("Yes");
} else {
  console.log("No");
}

// Output: Yes
// -------------------------------------------------------------------------------

let a3 = null;

if (a3 == undefined) {
  console.log("Loose Equal");
} else {
  console.log("Not Equal");
}
// Output: Loose Equal

// -------------------------------------------------------------------------------
switch (3) {
  case "3":
    console.log("String 3");
    break;
  case 3:
    console.log("Number 3");
    break;
  default:
    console.log("None");
}
// Output: Number 3
// -------------------------------------------------------------------------------
if ("false") {
  console.log("Runs");
} else {
  console.log("Skips");
}
// Output: Runs
// -------------------------------------------------------------------------------  
if ([] == false) {
  console.log("Equal");
}
// Output: Equal

// -------------------------------------------------------------------------------
if (null == undefined) {
  console.log("Equal");
}
// Output: Equal
// -------------------------------------------------------------------------------
if (null || undefined) {
  console.log("Yes");
}
else {
  console.log("No");

}
// Output: No
// -------------------------------------------------------------------------------
// ❌ Syntax Error
// let result = a4 || b ?? c;

// ✅ Use parentheses
let result = (a4 || b) ?? c;


