// Street
// City
// Zipcode

//showAddress(address) --> show all properties with value

const address = {
    street: 'Tukum',
    city: 'Chandrapur',
    zipCode: 442400
}

showAddress(address)

function showAddress(addressObj) {
    for (let key in addressObj)
        console.log(key, addressObj[key]);
}

