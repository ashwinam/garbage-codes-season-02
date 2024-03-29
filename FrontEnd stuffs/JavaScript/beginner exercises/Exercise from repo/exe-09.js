// 9. Disemvowel Trolls

/*
Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and returns a new string with all vowels (a, e, i, o, u) removed.


*/

const disemvowel = str => {
    const VOWELS = 'aAeEiIoOuU'
    let newStr = ''
    for (let char of str) {
        if (VOWELS.includes(char))
            continue;
        newStr += char;
    }

    // Alternate way
    const sNewStr = [...str]
    let output = sNewStr.filter(char => !VOWELS.includes(char))
    console.log(output.join(''));


    return newStr;
};

// Author solution
// const disemvowel = str => {
//     // Let's use regular expressions (regex)
//     return str.replace(/[aeiou]/gi, '');
//   };

console.log(disemvowel('This website is for losers LOL!')); // 'Ths wbst s fr lsrs LL!'