// 2. Even or Odd

/* 
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

// const even_or_odd = number => {
//     if (number % 2 === 0) return 'Even';
//     return 'Odd';
// };

// Author solution

const even_or_odd = number => {
    // Let's use a ternary operator
    return number % 2 === 0 ? 'Even' : 'Odd';
};

console.log(even_or_odd(0)); // 'Even'
console.log(even_or_odd(2)); // 'Even'
console.log(even_or_odd(3)); // 'Odd'
console.log(even_or_odd(-3)); // 'Odd'