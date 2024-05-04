// 48. Count Characters in Your String

/*
Write a function that counts the frequency of all the characters in a given string.
*/

const count = string => {
    let output = {};
    for (let char of string)
        char in output ? output[char] += 1 : output[char] = 1;

    return output;
  };
  
  console.log(count('')); // {}
  console.log(count('aba')); // { a: 2, b: 1 }