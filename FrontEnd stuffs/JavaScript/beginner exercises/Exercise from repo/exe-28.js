// 28. Isograms

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

const isIsogram = str => {
    let lowerLetters = str.toLowerCase()
    let outputArray = []
    if (!lowerLetters) return true;
    for (let char of lowerLetters) {
        if (!(outputArray.includes(char))) {
            outputArray.push(char);
        }
        else return false;
    }

    return true
};

console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('isIsogram')); // false
console.log(isIsogram('isogram')); // true
console.log(isIsogram('moOse')); // false
console.log(isIsogram('aba')); // false
console.log(isIsogram('')); // true