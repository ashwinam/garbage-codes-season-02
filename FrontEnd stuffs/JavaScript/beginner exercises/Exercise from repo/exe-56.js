// 56. Concatenation of Array

/*
Write a function that given an integer array nums of length n, returns an array of length 2n where nums is concatenated to itself.
*/

const getConcatenation = nums => {
    return nums.concat(nums);
  };

//   Author Solution

/*
const getConcatenation = nums => {
  return [...nums, ...nums];
};
*/
  
  console.log(getConcatenation([1, 2, 3])); // [1, 2, 3, 1, 2, 3]
  console.log(getConcatenation([4, 3, 2, 1])); // [4, 3, 2, 1, 4, 3, 2, 1]