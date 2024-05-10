// 54. Scramble

/*
Write a function that accepts two strings and returns true if some or all of the characters in the first string can be rearranged to match the second string.
*/

const scramble = (str1, str2) => {
    if (str1.length < str2.length) return false

    let output_str = ""
    const list_of_words = [...str1]
    const list_of_words2 = [...str2]
    for (let char in list_of_words2){
        for (let char1 in list_of_words){
            if (list_of_words2[char] === list_of_words[char1]) {
                output_str += list_of_words[char1]
                list_of_words.splice(char1, 1)
                break;
            } 
                
        }
    }
    return output_str === str2;
  };
  
  console.log(scramble('scriptjava', 'javascript')); // true
  console.log(scramble('scriptingjava', 'javascript')); // true
  console.log(scramble('scriptsjava', 'javascripts')); // true
  console.log(scramble('jscripts', 'javascript')); // false
  console.log(scramble('javscripts', 'javascript')); // false


