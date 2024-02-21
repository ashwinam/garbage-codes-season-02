/* 
Show only properties from object that are strings
*/

const person = {
    firstName: 'Ashwin',
    lastName: 'Mandaokar',
    age: 29,
    salary: 600000
};

showProperties(person);

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}