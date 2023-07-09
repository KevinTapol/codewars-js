// JavaScript Array Filter
/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
The solution would work like the following:
getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/ 

// Parameters or Edge Cases:
/*
    inputs will be an array of positive numbers
    can inputs be empty or null?
*/ 

// Return:
/*
    an array of only positive integers from the given array
*/ 

// Examples:
/*
    [1,2,3,6,8,10] => [2,6,8,10]
    [1,2] => [2]
    [12,14,15] => [12,14]
    [13,15] => []
    [1,3,9] => []
*/ 

// Pseudocode:
/*
    // create an array copy of only the even integers from the input
*/ 

// my answer
function getEvenNumbers(numbersArray){
    // create an array copy of only the even integers from the input
    return numbersArray.filter(e => e % 2 == 0)
}

// arrow fn implicit return for Codewars only also Best Practices
// strongly disagree that this should be best practices
// this should be most clever imo
const getEvenNumbers = (arr) => arr.filter(e => e % 2 == 0)

console.log(getEvenNumbers([1,2,3,6,8,10])) // [2,6,8,10]
console.log(getEvenNumbers([1,2])) // [2]
console.log(getEvenNumbers([12,14,15])) // [12,14]
console.log(getEvenNumbers([13,15])) // []
console.log(getEvenNumbers([1,3,9])) // []

// most clever
// strongly disagree for most clever practices
// they are using a regular fn instead of an arrow fn for the array.filter() method
function getEvenNumbers(numbersArray){
    return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
  }

// creating another function to check for even numbers and passing it in the array.filter() method
function isEven(num){
    return num%2==0
  }
  
  function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    var filtered = numbersArray.filter(isEven);
    return filtered;
  }

// using bitwise instead of modulus
const getEvenNumbers = arr => 
	arr.filter(x => !(x & 1));