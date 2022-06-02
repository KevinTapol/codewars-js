//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

//Parameters or Edge cases: inputs are only numbers, cannot assume size of the array, if array empty return 0
//Return: sum of numbers in an array
//Examples:Input: [1, 5.2, 4, 0, -1] Output: 9.2 Input: [] Output: 0 Input: [-2.398] Output: -2.398
//Psuedo code: .reduce() sum an array Number() to make current value a number 0 to avoid concatenation

//this works without use strict 
function sum (numbers) {
    //"use strict";
    let sum = numbers.reduce((acc, c) => acc + Number(c), 0)
    return sum
    
};

//this is the answer they were looking for
// Sum Numbers
sum = function (numbers) {
    "use strict";
    return numbers.reduce(function(t, n){
      return t + n;
    }, 0);
  };