// If ... Else

// time between 6 am and 12pm : Good Morning
// 12pm and 6pm : Good Afternoon
// Good Evening

let hour = 15;

if (hour >= 6 && hour <= 12){
    console.log('Good Morning');
}
else if (hour >= 12 && hour <= 18) {
    console.log('Good Afternoon');
}
else console.log('Good evening');

// Switch and case

let role = 'Moderator';

switch (role){
    case 'guest':
        console.log('guest user');
        break
    case 'Moderator':
        console.log('Moderator user');
        break
    default:
        console.log('Unknown User');
}

// Loops
// For loop

/*
    for(initialExpression; condition; IncreamentalExpressoion){
        statement
    }
*/

for(let i=0; i <= 5; i++) {
    console.log('Hello World', i);
}

// While

/*

while (condition){
    statement
    Icreament Expression
}
*/

// let i = 0;
// while (i<=5){
//     if (i%2!==0) console.log(i);
//     i++;
// }


// do ... while

let i = 9;
do {
    if (i%2!==0) console.log(i);
    i++;
} while (i<=5);