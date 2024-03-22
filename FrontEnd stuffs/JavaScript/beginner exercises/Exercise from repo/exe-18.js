// 18. Mumbling

/* 
Given a string which includes only letters, write a function that produces the outputs below.
*/

const accum = str => {
    let output = '';
    for (let i in str) {

        for (let j = 0; j < (parseInt(i) + 1); j++) {
            if (j === 0) {
                output += str[i].toUpperCase();
            } else {
                if (str[i] === str[i].toUpperCase()) output += str[i].toLowerCase();
                else
                    output += str[i];
            }
        }
        if (!(i == str.length - 1)) {
            output += '-';
        }

    }
    return output;
};

// Author solution
/*
const accum = str => {
  return str
    .split('')
    .map((ele, index) => ele.toUpperCase() + ele.toLowerCase().repeat(index))
    .join('-');
};
*/

console.log(accum('abcd')); // 'A-Bb-Ccc-Dddd'
console.log(accum('cwAt')); // 'C-Ww-Aaa-Tttt'
console.log(accum('RqaEzty')); // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'