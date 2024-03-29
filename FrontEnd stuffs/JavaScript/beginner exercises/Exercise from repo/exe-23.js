// 23. Sum of Positives

/*
Given an array of numbers, write a function that returns the sum of all of the positives ones. If the array is empty, the sum should be 0.
*/

const positiveSum = arr => {
    if (arr.length === 0) return 0;
    output = arr.reduce((acc, ele) => {
        if (ele > 0) {
            acc += ele
        }
        return acc;
    }, 0)

    return output;

};

console.log(positiveSum([1, 2, 3, 4, 5])); // 15
console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
console.log(positiveSum([])); // 0    