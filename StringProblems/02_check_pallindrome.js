//using built in function to reverse string then check 
function isPalindrome(str) {
    str=str.toLowerCase();
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
function isPalindrome2(str) {
    let left=0;
    let right=str.length-1;
    while(left<right){
        if(str[left]!==str[right]){
            return false
        }
        left++;
        right--;
        
    }
    return true;    
}
function isPalindromeRec(str){
    if(str.length<=1){
        return true;
    }
    if(str[0]!==str[str.length-1]){
        return false;
    }
    return isPalindromeRec(str.slice(1,str.length-1));
}

console.log(isPalindrome("Mam"));   // true
console.log(isPalindrome("helloll"));   // false
console.log("-=-=-=-=-=--=-=-=Using Pointers-=-=-=-=-=-=")
console.log(isPalindrome2("madam"));   // true
console.log(isPalindrome2("helloll"));   // false
console.log("-=-=-=-=-=--=-=-=Using Recursion-=-=-=-=-=-=")
console.log(isPalindrome2("madam"));   // true
console.log(isPalindrome2("helloll"));   // false

/*Pointer 
| Method                   | Time Complexity | Extra Space | Passes Over String | Notes                                      |
| ------------------------ | --------------- | ----------- | ------------------ | ------------------------------------------ |
| `split + reverse + join` | O(n)            | O(n)        | 3–4                | Clean, readable, not ideal for big strings |
| Two-pointer loop         | O(n)            | O(1)        | 1                  | Best performance                           |
*/