// Find the middle element
/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
*/
// Parameters or Edge Cases:
/*
    inputs will be an array of three numbers
    the numbers can be integers or floats and positive or negative
    can the array be null or empty?
*/
// Return:
/*
    original input index value of the element of the sorted input middle value
*/
// Examples:
/*
    [2, 3, 1] sorted would be [1, 2, 3] the element 2 index value of the original input is index 0 => 0
    [2.1, 3.2, 1.4] => 0
    [-2, -3, -1] => 0
    [-2, -3.2, 1] => 0
*/
// Pseudocode:
/*
    declare a sorted copy of the input array named arr
    declare a variable named value of the character at index 1 
    return the input array index of value
*/

// my answer
function gimme (x) {
    // declare a sorted copy of the input array named arr
    arr = x.slice().sort((a,b) => a - b)
    // declare a variable named value of the character at index 1
    value = arr[1]  
    // return the input array index of value
    return x.indexOf(value)
}

// my answer refactored
function gimme (x) {
    return x.indexOf(x.slice().sort((a,b) => a-b)[1])
}

// arrow function implicit return for Codewars Only
const gimme = (x) => x.indexOf(x.slice().sort((a,b) => a-b)[1])


console.log(gimme([2, 3, 1])) // 0
console.log(gimme([2.1, 3.2, 1.4])) // 0
console.log(gimme([-2, -3, -1])) // 0
console.log(gimme([-2, -3.2, 1])) // 0
    
// best practices and most clever
// Strongly disagree using array.concat() over slice and not using an arrow function for .sort()
function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
  }

// sorting values using greater than 
const gimme = function (arr) {
    return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
  };

// using Math.min() and Math.max()
var gimme = function (inputArray) {
    let index = 0;
    let max = Math.max(...inputArray);
    let min = Math.min(...inputArray);
    for(let i = 0; i < inputArray.length; i++){
      if(inputArray[i] !== max && inputArray[i] !== min){        
        index = i;
      }
    }
    return index;
  };