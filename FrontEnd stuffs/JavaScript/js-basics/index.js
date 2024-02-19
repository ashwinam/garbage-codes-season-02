// JS file
console.log("Hello WOrld!");

// js-basics : Variables & constants

let firstName = "Ashwin" ;
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