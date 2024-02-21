/* 
Sum of Multiples of 3 and 5

from 0 to 10
Multiples 3: 3, 6, 9
Multiple 5: 5, 10

result=33
*/

sumOfMultiple(10);

function sumOfMultiple(limit) {
    let result = 0;
    for (let i = 0; i <= 10; i++) {
        if (i % 3 === 0) result += i;
        if (i % 5 === 0) result += i;
    }
    console.log('Result', result);
}