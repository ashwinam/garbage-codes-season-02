// Checking equality object

// Constructor function

function Address(street, city, zipCode) {
    this.street = street
    this.city = city
    this.zipCode = zipCode
};

const address1 = new Address('a', 'b', 1);
const address2 = new Address('a', 'b', 1);

areEqual(address1, address2);

function areEqual(address1, address2) {
    console.log(address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode)
};

areSame(address1, address2);

function areSame(address1, address2) {
    console.log(address1 === address2);
};