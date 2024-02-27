// Functions In JavaScript

// Function Declaration
function walk() {
    console.log('Walk');
};

// Anonymous Function Expression

let run = function () {
    console.log('Run');
};

let move = run;


// Hoisting

// So hoisting is the process where you call the function before declaration, so what will happen? --> at a runtime the javascript engine put all the function declaration to the top.


// Arguments

// arguments is a special keyword in js that you can pass n number of arguments to the function, and you can pass without argument also;

function sum() {
    console.log(arguments);
}

sum(1, 2, 3, 4, 5, 6);

// Rest operator

// in params "...args" this called rest operator that can hold the params in a list format, and you can pass n number of arguments, after rest operator you cant pass any param it will throw error, so before you can pass it.


function productTotal(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

const output = productTotal(0.1, 20, 30);


// default parameter

// with default parameters make sure that default params are last of the parameters

function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years
}


// Getters and setters

// getters are treat function as a property inside an object and using setter you can set different different property as well

// Try & Catch blocks


const person = {
    firstName: "Ashwin",
    lastName: "Mandaokar",
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },

    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('The value need to be string')

        const parts = value.split(" ");

        if (parts.length !== 2)
            throw new Error('Must Provide a First and Last Name.')

        this.firstName = parts[0]
        this.lastName = parts[1]
    }
}

try {
    person.fullName = '';
} catch (error) {
    console.log(error);
}

console.log(person);

