// 34. Fibonacci Number

/*
Fibonacci number (Fibonacci sequence), named after mathematician Fibonacci, is a sequence of numbers that looks like this: 0, 1, 1, 2, 3, 5, 8, 13,.... You get first two starting numbers, 0 and 1, and the next number in the sequence is always the sum of the previous two numbers.

Write a function fib() that takes one parameter steps, and returns a number from the Fibonacci sequence, based on the parameter steps, which determines the position in Fibonacci number. For example fib(0) returns 0, fib(4) returns 3, and fib(15) returns 610.
*/

const fib = steps => {
    let f_pos = 1;
    let s_pos = 1;
    let sum = 0;
    for (let i = 3; i <= steps; i++) {
        sum = f_pos + s_pos;
        f_pos = s_pos;
        s_pos = sum;
    }
    return sum;
};


// Author solution
/*
// Recursive solution
const fib = steps => {
  if (steps < 2) return steps;
  return fib(steps - 2) + fib(steps - 1);
};
*/

console.log(fib(0)); // 0
console.log(fib(4)); // 3
console.log(fib(17)); // 1597
console.log(fib(20)); // 6765