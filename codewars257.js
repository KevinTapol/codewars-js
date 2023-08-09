// Even numbers in an array
/*
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/ 

// Parameters or Edge Cases:
/*
    there will be 2 input arguments
    the first will be an array of integers that can be positive or negative
    the second will be  a positive integer
    can either inputs be empty or null?
*/ 

// Return:
/*
    return an array of even numbers only with a length of the positive input integer of the input array starting from the end of the array
*/ 

// Examples:
/*
    [1, 2, 3, 4, 5, 6, 7, 8, 9], 3 => [4, 6, 8]
    [-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2 => [-8, 26]
    [6, -25, 3, 7, 5, 5, 7, -3, 23], 1 => [6]
*/ 

// Pseudocode:
/*
    // declare an empty array named result
    // iterate through the input array in reverse order
    // if the current element is divisible by 2 then push it to result
    // return a copy of result sliced ending at the input integer
*/ 

// my answer
function evenNumbers(array, number) {
    // declare an empty array named result
    let result = []
    // iterate through the input array in reverse order
    let arr = array.reverse()
    for (let i = 0; i < arr.length; i++){
        // if the current element is divisible by 2 then push it to result
        if (arr[i] % 2 == 0){
            result.push(arr[i])
        }
    }
    // return a copy of result sliced ending at the input integer
    return result.slice(0,number).reverse()
}

// my answer refactored iterating backwards
function evenNumbers(array, number) {
    let result = []
    for (let i = array.length ; i >= 0; i--){
        array[i] % 2 == 0 ? result.push(array[i]) : ''
    }
    return result.slice(0,number).reverse()
}

// my answer using array methods
function evenNumbers(a,n) {
    return a.reverse().filter(e => e % 2 == 0).slice(0,n).reverse()
}

// my answer using array methods arrow fn implicit return Codewars Only
const evenNumbers = (a,n) => a.reverse().filter(e => e % 2 == 0).slice(0,n).reverse()

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) // [4, 6, 8]
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)) // [-8, 26]
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)) // [6]

// best practices and most clever
// similar to my refactored for Codewars Only answer except they are slicing backwards instead of reversing the array
const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);

// while loop using array methods
function evenNumbers(array, number) {
    let result = [];
    let count = number;
    let i = array.length;
    while (count > 0) {
      if (array[i] % 2 === 0) {
        result.unshift(array[i]);
        count--;
      }
      i--;
    }
    return result;
  }