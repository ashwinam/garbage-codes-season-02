// 37. Unique In Order

/*
Implement a function that takes an iterable argument (a string or an array) as input and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
*/

const uniqueInOrder = iterable => {
    let output = [];
    for (let i in iterable) {
        if (iterable[i] !== iterable[parseInt(i) + 1]) {
            output.push(iterable[i])
        }
    }
    return output
};

// Author solution

/*
const uniqueInOrder = iterable => {
  const arr = [...iterable];
  return arr.filter((ele, index) => ele !== arr[index - 1]);
};
*/

console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1, 2, 3]
console.log(uniqueInOrder('ABBCcAD')); // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']