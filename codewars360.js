/*
Use map() to double the values in an array

Parameters or Edge Cases:
    inputs will be arrays of numbers that can be negative

Return:
    return an array of elements that are double the value of the input array of elements

Examples:
    [1,2,10,57] --> [2,4,20,114]

Pseudocode:
    create a shallow copy array of the input elements multiplying each element by 2
    return the new array
*/

// My Answer
function double(a) {
    return a.map(e => e*2)
}

console.log(double([1,2,10,57])) // [2,4,20,114]

// My Answer refactored one liner
const double = a => a.map(e => e*2)

// Best Practices and Most Clever
// same as my answer but not using an arrow fn for .map()
function double(array) {
    return array.map(function(c){ return c * 2 });
}