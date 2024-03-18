// 14. Square Every Digit

/*
Given an integer, your task is to square every digit of it and concatenate them to produce a new integer.
*/

const squareDigits = num => {
    let arrOfNumbers = [...num.toString()]
    return arrOfNumbers.map(num => parseInt(num) * parseInt(num)).join('')
};

console.log(squareDigits(2112)); // 4114
console.log(squareDigits(3212)); // 9414
console.log(squareDigits(9159)); // 8112581

