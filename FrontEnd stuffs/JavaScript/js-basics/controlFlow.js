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