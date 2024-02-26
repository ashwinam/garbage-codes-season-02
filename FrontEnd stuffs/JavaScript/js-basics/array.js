// ARRAYS IN JAVASCRIPT

// 1. Adding Element in the array

const numbers = [3, 4]; // Here we cant reassign but we can alter the content of the variables.

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);

// Finding an element(Primitives)

console.log(numbers.indexOf('a'));

numbers.push(2)

console.log(numbers.lastIndexOf(2));

console.log(numbers.indexOf(4) !== -1);

console.log(numbers.includes('b'));


