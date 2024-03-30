// 24. Find The Parity Outlier

/*
You are given an array of at least length 3 containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this "outlier" N.
*/


const findOutlier = arr => {
    let evens = [];
    let odds = [];
    arr.forEach(ele => (ele % 2 === 0) ? evens.push(ele) : odds.push(ele))
    let outlier = evens.length < odds.length ? evens[0] : odds[0];
    return outlier;
};

// Author solution

/*
const findOutlier = arr => {
  const evenArray = arr.filter(ele => ele % 2 === 0);
  const oddArray = arr.filter(ele => ele % 2 !== 0);
  return evenArray.length === 1 ? evenArray[0] : oddArray[0];
};
*/

console.log(findOutlier([0, 1, 2])); // 1
console.log(findOutlier([1, 2, 3])); // 2
console.log(findOutlier([1, 1, 0, 1, 1])); // 0
console.log(findOutlier([0, 0, 3, 0, 0])); // 3
console.log(findOutlier([160, 3, 1719, 19, 13, -21])); // 160
console.log(findOutlier([4, 0, 100, 4, 11, 2602, 36])); // 11