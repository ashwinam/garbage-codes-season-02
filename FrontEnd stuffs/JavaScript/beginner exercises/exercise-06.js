/* 
Count Truthy values in a array
*/
const values = [0, '', undefined, NaN, null, false, 1, 'Ashwin', true]

let output = countTruthy(values)
console.log('Count', output);


function countTruthy(array) {
    let truthyCount = 0;
    for (let element of array) {
        if (element) truthyCount++;
    }
    return truthyCount;
}