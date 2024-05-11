// 55. Wave, wAve, waVe, wavE
 
/*
Write a function that turns a given string into a wave! You will be passed a string and you must return that string in an array where each letter takes turns to become uppercase. The input string will always be lowercase but may be empty. If you encounter a whitespace then pass over it.
*/

const wave = str => {
  let output = [];
    for (let char in str) {
      let string = '';
      for (let i in str){
        if (str[char] === ' ') break;
        if (char === i){
          string += str[char].toUpperCase();
        } else {
          string += str[i];
        }
      }
      if (string)
        output.push(string);
    }
    return output;
  };
  
  console.log(wave('hello')); // ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO'];
  console.log(wave(' gap ')); // [' Gap ', ' gAp ', ' gaP '];
  console.log(wave('Two words')); // ['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS'];