// 30. Counting Duplicates

/*
Write a function that will return the count of distinct case-insensitive alphanumeric characters that occur more than once in the input string.
*/

const duplicateCount = text => {

    let charOccurences = {};
    let outputObject = {}
    const lowerCaseChars = text.toLowerCase();
    for (let char of lowerCaseChars) {
        (char in charOccurences) ? charOccurences[char] += 1 : charOccurences[char] = 1;
    }
    for (let [k, v] of Object.entries(charOccurences)) {
        if (v > 1) outputObject[k] = v;
    }
    return Object.keys(outputObject).length
};

console.log(duplicateCount('')); // 0
console.log(duplicateCount('abcde')); // 0
console.log(duplicateCount('abA11')); // 2
console.log(duplicateCount('aabbcde')); // 2
console.log(duplicateCount('aabBcde')); // 2
console.log(duplicateCount('Indivisibility')); // 1
console.log(duplicateCount('Indivisibilities')); // 2