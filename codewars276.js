/*
Largest Elements

Parameters or Edge Cases:
    1st input will be an integer greater than or equal to 0
    2nd input will be an array of integers that can be negative or positive

Return:
    an array the length of the 1st input with the highest values from the 2nd input array
    HIDDEN RESTRICTION!! the final array answer must be sorted from lowest to highest values!!

Examples:
    2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] --> [9, 10]
	0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] --> []
	2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5] --> [-1, 0]
	3, [5, 1, 5, 2, 3, 1, 2, 3, 5] --> [5, 5, 5]
	7, [9, 1, 50, 22, 3, 13, 2, 63, 5] --> [3, 5, 9, 13, 22, 50, 63]
	0, [1, 2, 3, 4, 8, 7, 6, 5] --> []

Pseudocode:
    create a copy of the 2nd input array sorted from highest to lowest
    slice the new array to the length of the 1st input and reverse it
    return the new array    
*/

// My Answer using array methods
function largest(n, array) {
    let arr = array.sort((a, b) => b - a).slice(0, n).reverse()
    return arr;
}

// My Answer Refactored
function largest(n, r){
    return r.sort((a, b) => b - a).slice(0, n).reverse()
}

// My Answer One Liner Arrow fn
const largest = (n, r) => r.sort((a, b) => b - a).slice(0, n).reverse()

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])) // [9, 10]

// Best Practices and Most Clever
// Only using 2 methods Sorting from highest to lowest and then slicing backwards the length of the input array to the input integer
function largest(n,xs){
    return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
}

// My Refactored version of Best Practices and Most Clever
const largest = (n, r) => r.sort((a, b) => a - b).slice(r.length - n)

// Very Clever
// slicing from the sorted array counting backwards from the end of the array n and then continuing forwards. If the length is 0, an error occurs. So, a conditional is necessary.
const largest = function(n,xs){
    return n === 0 ? [] : xs.sort((a, b)=> a - b).slice(-n)
  }

// Using a truthy falsy of the above solution
function largest(n,xs){
    return n?xs.sort(function(a,b){return a-b;}).slice(-n):[];
   }