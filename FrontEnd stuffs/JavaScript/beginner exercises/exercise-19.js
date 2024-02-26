// except

const numbers = [1, 2, 3, 4, 1, 1];

const output = except(numbers, [1, 2]);

console.log(output); // [2,3,4]



function except(arrayOfElements, arrayOfExcludeElements) {
    const output = []
    for (let element of arrayOfElements) {
        if (arrayOfExcludeElements.includes(element))
            continue
        output.push(element);
    }
    return output
}