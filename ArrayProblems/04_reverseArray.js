console.log("------------------------.reverse()---------------------------");
let arr=[12,34,56,78];
let temparr=arr.slice().reverse();    //modifys orignal arr
console.log(temparr);
// console.log(arr);
//------------------------------------------------------------------------------
console.log("------------------------using loop---------------------------");
let reversed=[];
for (let i = arr.length-1; i >=0; i--) {
    reversed.push(arr[i]); 
}
console.log(reversed);

console.log("------------------------using reduce()---------------------------");
let reversed2= arr.reduce((acc,val)=>[val,...acc],[]);
console.log(reversed2);
//--------------------------------------------------------------------------------------------
console.log("------------------------swapping values---------------------------");


for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}
console.log(arr)

console.log("------------------------Recursion()---------------------------");

function reverseRecursive(arr) {
  if (arr.length <= 1) return arr;
  return [arr[arr.length - 1]].concat(reverseRecursive(arr.slice(0, -1)));
}
console.log(reverseRecursive(arr)); 

//reverseRecursive([1, 2, 3])
// -> [3].concat(reverseRecursive([1, 2]))
// -> [3].concat([2].concat(reverseRecursive([1])))
// -> [3].concat([2].concat([1]))
// -> [3].concat([2, 1])
// -> [3, 2, 1]
