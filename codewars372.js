/*
Are they square?

Parameters or Edge Cases:
    inputs will be an array of numbers
    the array can be empty

Return:
    Return boolean true if every element of the input array is a square, false if not and undefined if the input array is empty.

Examples:
    [1, 4, 9, 16, 25, 36] --> true 
    [1, 2, 3, 4, 5, 6] --> false                 
    [] --> undefined          
    [1, 2, 4, 15] --> false

Pseudocode:
    if the input array is empty return undefined
    iterate through the input array and if every element is a square with Math.sqrt() return true else false 

*/

// My Answer
function isSquare(arr){
    return arr.length < 1 ? undefined : arr.every(e => Number.isInteger(Math.sqrt(e)))
}

// My Answer refactored one liner arrow fn
const isSquare = arr => arr.length < 1 ? undefined : arr.every(e => Number.isInteger(Math.sqrt(e)))

console.log(isSquare([1, 4, 9, 16, 25, 36])) // true
console.log(isSquare([1, 2, 4, 15])) // false
console.log(isSquare([])) // undefined

// Best Practices and Most Clever
// similar to my answer but using % 1 === 0 instead of Number.isInteger()
var isSquare = function(arr){
    return (arr.length) ? arr.every(x=>Math.sqrt(x)%1==0) : undefined;
}

// using !arr.length instead of < 1
var isSquare = function(arr){
    if (!arr.length) return undefined;
    return arr.every(x => Number.isInteger(Math.sqrt(x)));
}

// Brute force for loop
var isSquare = function(arr){
    for (var i = 0; i < arr.length; i++) {
      if(!Number.isInteger(Math.sqrt(arr[i]))) {
        return false;
      }
    }
  
    return arr.length ? true : undefined;
}

// clever to check if input length is equal to 0
var isSquare = $ => $.length === 0 ? undefined : $.every(el => Math.sqrt(el) % 1 === 0)

// void 0 returned as undefined
const isSquare = (arr) => arr.length ? arr.every(x => Number.isInteger(Math.sqrt(x))) : void 0

// clever to use .some() with a bang instead of every
const isSquare = arr => arr.length ? !arr.some(val => val ** .5 % 1) : void 0;

// very clever using **0.5 instead of Math.sqrt()
isSquare = _ => _.length ? _.filter(__=>__**0.5%1==0).length==_.length : undefined

// clever to check for whole number but sqrt then sqr compare to original
var isSquare = function(arr) {
    if (arr.length)
      return arr.every(x=>Math.floor(x**0.5)**2 == x);
}