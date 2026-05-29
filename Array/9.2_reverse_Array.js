const arr = [1, 2, 3, 4, 5];

const reverseArray = (arr) => {
  let left= 0 ;
  let right = arr.length - 1;
  let temp=0;

  while (left < right) {
    console.log(arr[left]);
    
    temp=arr[left];
    arr[left]=arr[right]
    arr[right]=temp;
    left++
    right--
  }
  return arr
};
console.log(reverseArray(arr))