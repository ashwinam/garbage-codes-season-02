// 25. Array.diff

/*
Write a function that subtracts one list from another and returns the result. It should remove all values from array a, which are present in array b.
*/

const arrayDiff = (a, b) => {
    return a.filter((ele, index) => ele != b[index])
};

// Author Solution
/*
const arrayDiff = (a, b) => {
  return a.filter(ele => !b.includes(ele));
};
*/

console.log(arrayDiff([1, 8, 2], [])); // [1, 8, 2]
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
console.log(arrayDiff([3, 4], [3])); // [4]
console.log(arrayDiff([], [4, 5])); // []