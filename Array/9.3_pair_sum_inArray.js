const nums = [1, 2, 3, 4, 6];
const target = 6;
// we expect a sorted array
const twoSumSorted = (nums, target) => {
  let left =0;
  let right = nums.length - 1

  while (left < right) {
    if ((nums[left]+nums[right])===target) {
        return [left, right]
    }
    else if ((nums[left]+nums[right]) < target) {
        left++;
    }
    else if ((nums[left]+nums[right]) > target) {
        right--;
    }
  }
};

console.log(twoSumSorted(nums,target))