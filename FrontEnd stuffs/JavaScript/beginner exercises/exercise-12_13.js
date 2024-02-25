// Street
// City
// Zipcode

//showAddress(address) --> show all properties with value

const address = {
    street: 'Tukum',
    city: 'Chandrapur',
    zipCode: 442400
}

// lets initialize address object using factory function and constructor function

// Factory function

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

// Constructor function

function Address(street, city, zipCode) {
    this.street = street
    this.city = city
    this.zipCode = zipCode
}

const anotherAddress = new Address('Tukum', 'Chandrapur', 442401)

showAddress(anotherAddress)

function showAddress(addressObj) {
    for (let key in addressObj)
        console.log(key, addressObj[key]);
}

