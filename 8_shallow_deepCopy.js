// Shallow copy: When you copy an object, the new object will have the same references as the original object. 
// If you modify the properties of the new object, the original object will also be modified.

const original = {
  name: "Sumit",
  address: {
    city: "Delhi"
  }
};

const shallowCopy = { ...original }; // spread = shallow copy

shallowCopy.name = "Rahul";           // changes only in shallowCopy ✅
shallowCopy.address.city = "Mumbai";  // changes in BOTH ❌

console.log(original.address.city);   //  "Mumbai" 
//---------------------------------------------------------------------------------------------------
//Deep Copy: When you copy an object, the new object will have its own separate copies of the properties. 
// If you modify the properties of the new object, the original object will remain unchanged.
const original2 = {
  name: "Sumit",
  address: {
    city: "Delhi"
  }
};

const deepCopy = structuredClone(original2);//deep copy

deepCopy.address.city = "Mumbai";

console.log(original2.address.city); //  "Delhi" 
//-------------------------------------------------------------------------------

// Array Behaviours
//ShallowCopy
const original3 = [1, 2, [3, 4]];

const shallowCopyy = [...original3]; // or original3.slice()

shallowCopyy[0] = 100;        //  only changes the copy
shallowCopyy[2][0] = 999;     //  changes both!

console.log(original3);       //  [1, 2, [999, 4]]

//-------------------------------------------------------------------------

// Deep deepCopy
const orginal4 = [1, 2, [3, 4]];
const deepCopyy = structuredClone(orginal4); // ✅ modern and clean

deepCopyy[2][0] = 999;

console.log(orginal4);    // [1, 2, [3, 4]]
console.log(deepCopyy);    // [1, 2, [999, 4]]

//------------------------------------------------------------------------

const a = { x: 1, y: 2 };
const b = { y: 100, z: 3 };
const result = { ...a, ...b }; // overwrites y 
console.log(result); // { x: 1, y: 100, z: 3 }
