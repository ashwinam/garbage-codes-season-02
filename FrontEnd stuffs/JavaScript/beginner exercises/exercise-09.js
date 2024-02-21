/*
Calculate Grade

1-59: F
60-69: D
70-79: C
80-89: B
90-100: A
*/

const marks = [80, 80, 90];

const output = calculateGrade(marks);
console.log(output);

function calculateGrade(arrayOfMarks) {
    let average = Math.floor(sumOfArray(arrayOfMarks) / arrayOfMarks.length)


    if (average <= 59)
        return 'F'
    if (average <= 69)
        return 'D'
    if (average <= 79)
        return 'C'
    if (average <= 89)
        return 'B'
    return 'A'

}

function sumOfArray(arrayOfNumbers) {
    let sum = 0;

    for (let element of arrayOfNumbers)
        sum += element

    return sum
}