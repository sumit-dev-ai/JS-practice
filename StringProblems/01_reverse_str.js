// Method1 Normal  //For Loop
function reverseNormal(str){
    let reverseStr="";
    for(let i=str.length-1;i>=0;i--){
        reverseStr+=str[i];
    }
    return reverseStr;
    }
//Built in features
function reverseStrMethod(str){
    return str.split("").reverse().join("");
}
//using for of
function ReverseForOf(str){
    let reverseStr="";
    for(let char of str){
        reverseStr=char+reverseStr;
    }
    return reverseStr;
}
// Recursion working right to left
function reverseRecursion(str){
    if(str.length<=1){
        return str;
    }
    let lastChar=str[str.length-1];
    let newStr=str.slice(0,str.length-1);
    return lastChar+reverseRecursion(newStr);
    
}
// Recursion working left to right
function reverseRecursion2(str){
    if (str.length<=1) {
        return str;
    }
    let firstChar=str[0];
    let newStr=str.slice(1);
    return reverseRecursion2(newStr)+firstChar;

}

const str="Sumit JIndal CSE Engineer";
console.log(reverseNormal(str));
console.log(reverseStrMethod(str));
console.log(ReverseForOf(str));
console.log(`recursive solution 1: ${reverseRecursion(str)}`);
console.log(`recursive solution 2: ${reverseRecursion2(str)}`);