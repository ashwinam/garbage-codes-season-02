// 46. The Hashtag Generator

/*
The marketing team is spending way too much time typing in hashtags. Let's help them with our own Hashtag Generator! Here's the deal:

- It must start with a hashtag #.
- Ignore spaces in the input.
- All words must have their first letter capitalized.
- If the final result is longer than 140 chars it must return false.
- If the input or the result is an empty string it must return false.
*/

const generateHashtag = str => {
    let arrOfWords = str.split(" ").filter(ele => ele);
    if (arrOfWords.length < 1) return false;
    let newArr = arrOfWords.map(ele => ele[0].toUpperCase() + ele.slice(1, ele.length))
    newArr.unshift("#");
    const output = newArr.join("");
    return output.length > 140 ? false : output;
  };
  
  console.log(generateHashtag('JavaScript')); // #JavaScript
  console.log(generateHashtag('Do we have a Hashtag')); // #DoWeHaveAHashtag
  console.log(generateHashtag('    Hello     World   ')); // #HelloWorld
  console.log(generateHashtag('coding' + ' '.repeat(140) + 'for life')); // #CodingForLife
  console.log(generateHashtag('')); // false
  console.log(generateHashtag(' ')); // false
  console.log(generateHashtag('a'.repeat(140))); // false
  console.log(generateHashtag(' '.repeat(200))); // false