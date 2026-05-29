// Problem: Longest substring without repeating characters
//aabcc
const lengthOfLongestSubstring = (str) => {
  let left = 0;
  let maxLength = 0;
  const seen = new Set();

  for(let right = 0 ; right < str.length ; right++){
        const char = str[right];        //a
        while (seen.has(char)) {
            seen.delete(str[left]);
            left++;
        }

        seen.add(char)

        const currentLength = right -left + 1;
        maxLength=Math.max(currentLength , maxLength)
  }
  return maxLength;

}

console.log(lengthOfLongestSubstring("aabcccdff"));
