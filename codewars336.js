/*
Number Pairs
In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

Example:
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]

Parameters or Edge Cases:
    both inputs will be an array of integers that can be negative or positive
    can the array be empty?
    
Return:
    return an array of the same length of the input arrays of which element is greater in value per each index

Examples:
    [13, 64, 15, 17, 88], [23, 14, 53, 17, 80] --> [23, 64, 53, 17, 88]
    [34, -64, 15, 17, 88], [23, 14, 53, 17, 80] --> [34, 14, 53, 17, 88]

Pseudocode:
    iterate through the 1st input array comparing each value at respective index values and return an array of the largest value compared at each index
*/

// My Answer
function getLargerNumbers(a, b) {
    return a.map((e, i) => e > b[i] ? e : b[i])
}

// My Answer refactored one liner arrow fn
const getLargerNumbers = (a, b) => a.map((e, i) => e > b[i] ? e : b[i])

console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80])) //

// Best Practices brute force for loop using Math.max() to compare values instead of >
function getLargerNumbers(a, b) {
    var newArray = [];
    for ( i=0; i<a.length; i++) {
      newArray.push( Math.max( a[i], b[i] ) );
    }return newArray;
}

// Most Clever
// similar to my refactored answer but using Math.max() instead of >
const getLargerNumbers = (a, b) => a.map((v, i) => Math.max(v, b[i]));

// using .reduce() setting up a default empty array to be filled by each cumulative element el into the default array of acc and referencing index of i
const getLargerNumbers = (a, b) => a.reduce((acc, el, i) => [...acc, Math.max(el, b[i])], [])

// using Array.from() referencing input array a for length e for element and i for index to create the array answer instead of .map()
const getLargerNumbers = (a, b) => Array.from(a, (e,i) => Math.max(e, b[i]));