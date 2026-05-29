// Find the longest subarray whose sum is less than or equal to target.
const nums = [2, 1, 5, 1, 3, 2, 0 ];
const target = 7;


const minSumSubarray = (nums, target) => {
    let left = 0;
    let maxLength = 0;
    let windowSum = 0;

    for (let right = 0; right < nums.length; right++) {
        windowSum += nums[right];

        while(windowSum > target){
            windowSum-=nums[left];
            left++;
        }

        const currentLength = right - left + 1;
        maxLength = Math.max(maxLength, currentLength);
    }
    return maxLength;

}

console.log(minSumSubarray(nums, target));
