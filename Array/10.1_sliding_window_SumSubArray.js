const nums = [2, 1, 5, 1, 3, 2];
const k = 3;

const maxSumSubarray = (nums, k) => {
    
    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    let maxSum = windowSum;
    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum - nums[i - k] + nums[i];
        maxSum = Math.max(windowSum, maxSum);
    }
    return maxSum;
};

console.log(maxSumSubarray( nums, k ));
