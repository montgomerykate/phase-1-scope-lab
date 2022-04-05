var customerName = 'bob';
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = 'not bob'
}
function overwriteBestCustomer(name) {
    bestCustomer = name;
}
const leastFavoruteCustomer = 'probably bob';
function changeLeastFavoriteCustomer() {
    leastFavoruteCustomer = 'definetly bob';
}