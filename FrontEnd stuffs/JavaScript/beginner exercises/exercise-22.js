// get max

const numbers = [2555, 544, 89, 10];

const output = getMax(numbers);
console.log(output); // 4

// using normal function

function getMax(array) {
    if (array.length === 0) return undefined;
    let greatest = 0;
    for (let element of array)
        if (greatest < element)
            greatest = element;

    return greatest;
};


// using reduce function

function getMax(array) {
    if (array.length === 0) return undefined;
    return array.reduce((accumulator, current) => (accumulator < current) ? current : accumulator, 0);
}