// JS file
console.log("Hello WOrld!");

// js-basics : Variables & constants

let firstName = "Ashwin";
console.log(firstName);

// variable rule
// 1) variable name shouldn't be reserved keywords
// 2) should be meaningful
// 3) cannot start with numbers
// 4) cannot include space and hyphen

// js-basics : constants
// constants cannot be changed once its initialized
const interestRates = 5;
console.log(interestRates);

// js-basics: Primitive types / value types

let name = 'Ashwin'; // String Literal
let quantity = 10; // Number Literal
let isValid = true; // Boolean Literal
let first_name = undefined; // undefined Literal
let selectedColor = null; // null Literal


// js-basics: object

let person = {} // Object notation

person = {
    names: 'Ashwin',
    age: 29
}

// For accessing properties of an we have two choices
// 1. [Dot] notation

person.names = 'Arun'

// 2. using square brackets

person['age'] = 55

console.log(person.names);
console.log(person.age);

// js-basics: Functions

function greet(name) { // name here is parameter or a inputs for a function
    console.log('Hello ' + name);
}// Function declaration

greet('Ashwin'); // Function call

function square(num) {
    return num * num
}

console.log(square(4));

// Operators
// 1. Arithmatic Operators
let x = 10;
let y = 3;


console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Increament
console.log(++x);
console.log(x++);
console.log(x);


// Decreament
console.log(--x);
console.log(--x);

// 2. Assignment Operator
x += 10;
x++; // x = x+1;
x *= 10


// 3. Comparison operator
let z = 1;
z > 1;
z >= 1;
z < 2;
z <= 1;
z === 1;

// 4. Equality operator
// Strict equality (Type + value)

1 === 1; // true
'1' === 1; // false

// Lose equality (value)
1 == 1; // true
'1' == 1 // true
true == 1; // true -- here it converts type of 2nd value

// 5. Ternary operator
let points = 110;
let types = (points > 100) ? 'gold' : 'silver';
console.log(types);
