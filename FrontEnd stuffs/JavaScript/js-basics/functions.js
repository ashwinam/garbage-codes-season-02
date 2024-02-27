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


function interest(principal, rate = 3.5, years) {
    return principal * rate / 100 * years
}