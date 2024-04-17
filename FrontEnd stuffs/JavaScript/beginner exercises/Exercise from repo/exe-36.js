// 36. Two Sum

/*
Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++)
            if (nums[i] + nums[j] === target)
                return [i, j]
    }

};

// Author solution
/*
const twoSum = (nums, target) => {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const j = nums.lastIndexOf(target - nums[i]);
    if (j > i) {
      return [i, j];
    }
  }

  // Alternative solution using Map
  // const map = new Map();

  // for (let i = 0; i < nums.length; i++) {
  //   const otherIndex = map.get(target - nums[i]);
  //   if (typeof otherIndex !== 'undefined') {
  //     return [otherIndex, i];
  //   }
  //   map.set(nums[i], i);
  // }
};
*/

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]