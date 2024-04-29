// 44. Rot13

/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher. Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted.
*/

const rot13 = str => {
    let alphabets = "abcdefghijklmnopqrstuvwxyz";

    let output = "";

    for (let char in str){
        if (!(isNaN(str[char]))) output += str[char]
        else if (
            !(str[char].charCodeAt() >= 65 && str[char].charCodeAt() <= 90) && // A-Z
            !(str[char].charCodeAt() >= 97 && str[char].charCodeAt() <= 122)// a-z
        ) output += str[char]
        else {
            charIndex = alphabets.indexOf(str[char].toLowerCase())
            if (charIndex + 13 > 25) charIndex = (charIndex + 13) - 26
            else charIndex = charIndex + 13
            output += str[char] === str[char].toUpperCase() ? alphabets[charIndex].toUpperCase() : alphabets[charIndex]
        }
    }
    return output;
  };
  
  console.log(rot13('az AZ')); // nm NM
  console.log(rot13('10+2 is twelve.')); // 10+2 vf gjryir.
  console.log(rot13('abcdefghijklmnopqrstuvwxyz')); // nopqrstuvwxyzabcdefghijklm