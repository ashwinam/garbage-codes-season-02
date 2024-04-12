// 31. Duplicate Encoder

/*
Write a function that converts a string to a new string where each character in the new string is ( if that character appears only once in the original string, or ) if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
*/

function occurancesOfCharacters(word) {
  let output = {};
  for (let char of word.toLowerCase()){
    if (char in output){
      output[char] += 1;
    } else {
      output[char] = 1;
    }
  }
  return output;
}

const duplicateEncode = word => {
    let result = occurancesOfCharacters(word);
    let output = '';
    for (let char of word.toLowerCase()) {
      result[char] > 1 ? output += ')' : output +='(';
    }
    return output;
  };
  
  console.log(duplicateEncode('din')); // '((('
  console.log(duplicateEncode('(( @')); // '))(('
  console.log(duplicateEncode('recede')); // '()()()'
  console.log(duplicateEncode('Success')); // ')())())'