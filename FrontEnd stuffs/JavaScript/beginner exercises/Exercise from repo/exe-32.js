// 32. Reversed Strings

/*
Write a function that reverses the string that is passed to it. For this challenge, you may NOT use the JavaScript built-in reverse() method.
*/

const reverseString = str => {
    let reversed_string = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed_string += str[i];
    }
    return reversed_string;
};

// Author Solution

/*
const reverseString = str => {
  let result = '';
  for (let char of str) {
    result = char + result;
  }
  return result;
};
*/

console.log(reverseString('hello')); // 'olleh'
console.log(reverseString('world')); // 'dlrow'
console.log(reverseString('')); // ''
console.log(reverseString('h')); // 'h'