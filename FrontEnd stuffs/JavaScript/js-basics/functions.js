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
