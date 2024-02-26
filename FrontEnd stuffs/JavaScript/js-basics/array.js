// ARRAYS IN JAVASCRIPT

// 1. Adding Element in the array

const numbers = [3, 4]; // Here we cant reassign but we can alter the content of the variables.

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);

// Finding an element(Primitives)

console.log(numbers.indexOf('a'));

numbers.push(2)

console.log(numbers.lastIndexOf(2));

console.log(numbers.indexOf(4) !== -1);

console.log(numbers.includes('b'));

// Finding an element(Reference types)

const courses = [
    { id: 1, name: 'a' },
    { id: 1, name: 'b' }
]


const course = courses.find(function (course) {
    return course.name === 'a';
});

// we can implement above code using arrow functions as well

const course2 = courses.find(course =>
    course.name === 'a'
);

// () => {<statement>};

console.log(course2, 'course2');

const course1 = courses.findIndex(function (course) {
    return course.name === 'a';
});

// predicate is a function that takes an input and return an Booleans

console.log(course);
console.log(course1);

// Removing an Element


const marks = [10, 20, 30, 40]

// End
// console.log(marks.pop());

// Beginning
// console.log(marks.shift());

// middle
marks.splice(1, 1);

console.log(marks);

// Emptying an array

let numbers3 = [1, 2, 3, 4, 5, 6];

// Solution 1
// numbers3 = [];

// Solution 2
// numbers3.length = 0;

// Solution 3
numbers3.splice(0, numbers3.length);


// Combining and slicing

const first = [1, 2, 3];
const second = [4, 5, 6];

first.push({ id: 1 })


const combined = first.concat(second);

console.log(combined.slice(2, 4));

const slice = combined.slice()

// with primitives it copies the value but with reference types like object & arrays is copied reference so if anything changes in reference types it also reflects everywhere

// spread operator

const combined2 = [...combined]



