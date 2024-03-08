// 7. Is n Divisible by x and y?

/* 
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
*/

const isDivisible = (n, x, y) => {
    return n % x === 0 && n % y === 0;
};

console.log(isDivisible(3, 3, 4)); // false
console.log(isDivisible(12, 3, 4)); // true
console.log(isDivisible(8, 3, 4)); // false
console.log(isDivisible(48, 3, 4)); // true