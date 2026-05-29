const palindrome = (str )=>{
    let left = 0;
    let right = str.length-1;

    while (left < right) {
        if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false
        }
        left++; 
        right--;

    }
    return true;

}
console.log(palindrome("Madam"))
console.log(palindrome("value"))