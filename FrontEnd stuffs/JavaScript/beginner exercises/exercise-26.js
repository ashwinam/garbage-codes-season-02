// Try Catch problem

try {
    const numbers = [1, 2, 3, 4, 1];

    const output = countOccurancesOfElement(numbers, 1);

    console.log(output);
}
catch (error) {
    console.error(error);
}

function countOccurancesOfElement(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('First argument need to be an array')

    if (!array.every(value => typeof value === 'number'))
        throw new Error('All elements need to be an number')

    const output = array.reduce((accumulator, element) => {
        if (element === searchElement)
            accumulator++;
        return accumulator
    }, 0)
    return output;
}