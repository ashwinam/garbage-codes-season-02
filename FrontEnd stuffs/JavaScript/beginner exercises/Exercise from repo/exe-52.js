// 52. First Non-repeating Character

/*
Write a function that takes an input string and returns the first character that is not repeated anywhere in the string. Upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter.
*/

const firstNonRepeatingLetter = str => {
    for (let char of str){
        smallChar = char.toLowerCase();
        let lowerCaseStr = str.toLowerCase()
        if (lowerCaseStr.indexOf(smallChar) === lowerCaseStr.lastIndexOf(smallChar)){
            return char;
        }
    }
  };

//   Author solution
/*
const firstNonRepeatingLetter = str => {
  const strToLower = str.toLowerCase();
  for (let char of str) {
    if (
      strToLower.indexOf(char.toLowerCase()) ===
      strToLower.lastIndexOf(char.toLowerCase())
    ) {
      return char;
    }
  }
  return '';
};
*/

  
  console.log(firstNonRepeatingLetter('a')); // 'a'
  console.log(firstNonRepeatingLetter('stress')); // 't'
  console.log(firstNonRepeatingLetter('sTreSS')); // 'T'
  console.log(firstNonRepeatingLetter('abba')); // ''
  console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")); // ','

