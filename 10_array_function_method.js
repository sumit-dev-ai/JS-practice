//ForEach()
// no return, no break, ignores empty slots
[1, 2, 3,,,,, 4].forEach(num => {

  if (num === 3) return; // just skips to next, doesn't break the loop
  console.log(num);
  
});
console.log("------------------------------------------------------------");
//0-------------------------------------0-----------------------------------0------------------
//map()
const newArr=[1,2,3].map((num,index) => num*2);
console.log(newArr);
console.log("------------------------------------------------------------");
const result = [1, 2, 3].map(num => console.log(num)); // result = [undefined, undefined, undefined]
console.log(result); // result = [undefined, undefined, 
//console log return nothing 

//0-------------------------------------0-----------------------------------0------------------
