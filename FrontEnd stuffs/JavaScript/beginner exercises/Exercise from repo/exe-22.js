// 22. Exes and Ohs

/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The input string can contain any character.
*/

const XO = str => {
    if (!str.includes('x'))
        if (!str.includes('o')) return true;
    return str.toLowerCase().includes('xo')
}; // My solution is wrong maybe i did not understand the problem

// Author Solution
/*
const XO = str => {
  const lowerStr = str.toLowerCase();
  let result = 0;
  for (const letter of lowerStr) {
    if (letter === 'x') {
      result++;
    } else if (letter === 'o') {
      result--;
    }
  }

  return !result;
};
*/

console.log(XO('xo')); // true
console.log(XO('Oo')); // false
console.log(XO('xxOo')); // true
console.log(XO('xxxm')); // false
console.log(XO('ooom')); // false
console.log(XO('ty')); // true (when no 'x' and 'o' is present should return true)