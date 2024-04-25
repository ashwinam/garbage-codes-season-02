// 42. Remove Duplicates from Sorted Array

/*
Given a sorted array nums, write a function that removes the duplicates in-place such that each element appears only once and returns the new length. Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/

const removeDuplicates = nums => {
    let setOfNums = new Set(nums)
    return setOfNums.size
};

// Author Solution

/*
const removeDuplicates = nums => {
  if (nums.length <= 1) return nums.length;
  let currentIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[currentIndex] !== nums[i]) {
      currentIndex++;
      nums[currentIndex] = nums[i];
    }
  }

  nums.length = currentIndex + 1;
  return nums.length;
};
*/

console.log(removeDuplicates([1, 1, 2])); // 2 (because [1, 2] has length 2)
console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
console.log(removeDuplicates([])); // 0