// Count occurances

const numbers = [1, 2, 3, 4, 1];

const output = countOccurancesOfElement(numbers, '2');

console.log(output);




// using normal function
// function countOccurancesOfElement(array, searchElement) {
//     let count = 0;
//     for (let element of array)
//     if (element === searchElement)
//     count++;
// return count;
// }


// using reduce method

function countOccurancesOfElement(array, searchElement) {
    const output = array.reduce((accumulator, element) => {
        if (element === searchElement)
            accumulator++;
        return accumulator
    }, 0)
    return output;
}