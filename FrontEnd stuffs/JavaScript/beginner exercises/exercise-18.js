// Implements includes functionality

const numbers = [1, 2, 3, 4];

const output = elementIncludes(numbers, 3);

console.log(output);

// function elementIncludes(array, searchElement) {
//     return searchElement in array;
// } // using in operrator

function elementIncludes(arrayOfElements, searchElement) {
    for (let element of arrayOfElements)
        if (element === searchElement)
            return true;

    return false;
}
