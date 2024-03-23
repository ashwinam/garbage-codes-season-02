// 19. Stop gninnipS My sdroW!

/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces.
*/

const spinWords = str => {
    const splittedString = str.split(' ')
    let mappedList = splittedString.map(word => {
        if (word.length >= 5) {
            return [...word].reverse().join('')
        }
        return word;
    })
    return mappedList.join(' ')
};

// Author solution

/*
const spinWords = str => {
  return str
    .split(' ')
    .map(word => (word.length < 5 ? word : word.split('').reverse().join('')))
    .join(' ');
};
*/

console.log(spinWords('This is a test')); // 'This is a test'
console.log(spinWords('Hey fellow warriors')); // 'Hey wollef sroirraw'
console.log(spinWords('This is another test')); // 'This is rehtona test'