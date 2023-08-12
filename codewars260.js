// Filter the number
/*
Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
*/ 

// Parameters or Edge Cases:
/*
    inputs will be strings of mixed letters and numbers
    will letters be uppercase or lowercase
    will inputs be empty or null?
*/ 

// Return:
/*
    return only the numbers as one integer from the string maintaining the order they came in
*/ 

// Examples:
/*
    "123" => 123
    "a1b2c3" => 123
    "aa1bb2cc3dd" => 123
*/ 

// Pseudocode:
/*
    // declare a string nums and set it equal to using regex replace all letters with empty space leaving only characters of 0-9
    // declare a string nums and set it equal to using regex replace everything that is not 0-9 with an empty string 
    // convert the result into an integer and return it

    // declare a string nums and set it equal to using regex replace all letters with empty space leaving only characters of 0-9
*/ 

// my answer
var filterString = function(value) {
    // declare a string nums and set it equal to using regex replace all letters with empty space leaving only characters of 0-9
    let nums = value.replace(/[a-z]/g, '')
    // convert the result into an integer and return it
    return +nums
}

// my answer refactored
var filterString = function(value) {
    return +value.replace(/[^0-9]/g, '')
}

// my answer refactored implicit return Codewars only
const filterString = (s) => +s.replace(/[^0-9]/g, '')

console.log(filterString("123")) // 123
console.log(filterString("a1b2c3")) // 123
console.log(filterString("aa1bb2cc3dd")) // 123

// best practices
// similar to my answer but using \d to match non-digit characters
var FilterString = function(value) {
    return parseInt(value.replace(/[^\d]/g, ""))
}

// most clever 
// same as best practices but using \D instead of \d to match non-digit characters
const FilterString = value => +value.replace(/\D/g, '');

// using array methods to filter on what is not NaN
var FilterString = function(value) {
    return +value.split('').filter(n => !isNaN(n)).join('');
  }

// using array methods
var FilterString = function(value) {
    let parsed = value
      .split``
      .map(Number)
      .filter(Number.isInteger)
      .join``
    
    return Number(parsed) 
  }