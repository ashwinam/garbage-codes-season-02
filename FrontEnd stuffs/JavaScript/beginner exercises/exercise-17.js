// Array from range

const numbers = arrayFromRange(-10, -4);

console.log(numbers);

function arrayFromRange(min, max) {
    const arrayOfNumbers = [];
    for (let i = min; i <= max; i++)
        arrayOfNumbers.push(i);

    return arrayOfNumbers;
}