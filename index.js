// Write your solution in this file!
// declare a variable in a global scope called customerName
// use var and assign it the value bob
var customerName;
customerName = 'bob';
// create a function upperCaseCustomerName
// this function should access the customerName and uppercase it
function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();

}
//create a function setBestCustomer
//let it declare a variable called bestCustomer
//assign the value 'not bob' to the variable

function setBestCustomer() {
    return  bestCustomer = 'not bob';
}
//by creating a variable in a global scope
//we can overwrite the value in bestCustomer from 'not bob'
//to 'maybe bob' by writing a new function overwriteBestCustomer

function overwriteBestCustomer() {
    return bestCustomer = 'maybe bob';
}
//declare a variable with const leastFavoriteCustomer
//assign it a value Harry Potter
//create a function changeLeastFavoriteCustomer to change the value from Harry Potter to Mary Poppins

const leastFavoriteCustomer = 'Harry Potter';
function changeLeastFavoriteCustomer() {
     return leastFavoriteCustomer = 'Mary Poppins';
}