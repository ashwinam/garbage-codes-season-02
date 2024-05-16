// 59. Valid Palindrome

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.
*/

const isPalindrome = str => {
    let alphanumericChars = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (/[a-zA-Z0-9]/.test(char)) {
            alphanumericChars += char;
        }
        }

    let string = alphanumericChars.toLowerCase();
    let reversedString = [...string].reverse().join("")
    return string === reversedString;
  };
  
  console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
  // Explanation: "amanaplanacanalpanama" is a palindrome.
  console.log(isPalindrome('race a car')); // false
  // Explanation: "raceacar" is not a palindrome.
  console.log(isPalindrome('ab_a')); // true
  // Explanation: "aba" is a palindrome.
  console.log(isPalindrome(' ')); // true
  // Explanation: `s` is an empty string "" after removing non-alphanumeric characters.
  // Since an empty string reads the same forward and backward, it is a palindrome.