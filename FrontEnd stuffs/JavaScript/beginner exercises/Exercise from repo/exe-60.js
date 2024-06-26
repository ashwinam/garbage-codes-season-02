// 60. Move Zeroes

/*
Given an integer array nums, move all 0's in the array to the end of it while maintaining the relative order of the non-zero elements. Achieve this without copying the array or creating a new array.
*/

const moveZeroes = nums => {
    let zeros = nums.filter(ele => ele === 0)
    let nonZeros = nums.filter(ele => ele);
    return nonZeros.concat(zeros);
  };

//   Author solution
/*
const moveZeroes = nums => {
  const length = nums.length;
  let index = 0;

  for (let i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      if (index !== i) {
        nums[i] = 0;
      }
      index++;
    }
  }

  return nums;
};
*/
  
  console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
  console.log(moveZeroes([0, 0, 1])); // [1, 0, 0]
  console.log(moveZeroes([0])); // [0]