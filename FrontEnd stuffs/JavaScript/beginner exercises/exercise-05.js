/*
list down the range of numbers with odd even labels
*/

showNumbers(10)


function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        (i % 2 === 0) ? console.log(i, 'Even') : console.log(i, 'Odd');
    }
}