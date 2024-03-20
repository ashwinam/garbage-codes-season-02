// 16. Highest and Lowest

/*
Given a string of space-separated numbers, write a function that returns the highest and lowest numbers. There will always be at least one number in the input string.

*/

const highAndLow = numbers => {
    let outpt = '';
    let splitedNumbers = numbers.split(" ");
    // let intOfNumbers = splitedNumbers.map(num => parseInt(num));
    outpt += Math.max(...splitedNumbers);
    outpt += ' ' + Math.min(...splitedNumbers);
    return outpt
};

// Author solution
/*
const highAndLow = numbers => {
  const arr = numbers.split(' ');
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
};
*/

console.log(highAndLow('1 2 3 4 5')); // '5 1'
console.log(highAndLow('1 2 -3 4 5')); // '5 -3'
console.log(highAndLow('1 9 3 4 -5')); // '9 -5'
console.log(highAndLow('0 -214 542')); // '542 -214'