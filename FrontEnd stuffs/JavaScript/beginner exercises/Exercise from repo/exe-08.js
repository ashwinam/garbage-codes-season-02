// 8. Vowel Count

/* 
Return the number (count) of vowels (a, e, i, o, u) in the given string. The input string will only consist of lower case letters and/or spaces.
*/

const getCount = str => {
    // Your solution
    let count = 0
    const vowels = 'aeiou'
    for (let i of str) {
        if (vowels.includes(i))
            count++;
    }
    return count;
};

console.log(getCount('my pyx')); // 0
console.log(getCount('pear tree')); // 4
console.log(getCount('abracadabra')); // 5
console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13