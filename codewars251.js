// Largest pair sum in array
/*
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
*/ 

// Parameters or Edge Cases:
/*
    inputs will be an array of integers that can be positive or negative
    can arrays be empty or null?
*/ 

// Return:
/*
    an integer of the sum of the 2 highest integer values from the input array
*/ 

// Examples:
/*
    [10,14,2,23,19] => 42
    [-100,-29,-24,-19,19] => 0
    [1,2,3,4,6,-1,2] => 10
    [-10, -8, -16, -18, -19] => -18
*/ 

// Pseudocode:
/*
    // declare an integer named maxVal as the max value of the input array
    // create an array copy of the input array named newArrStart starting from 0 to the index of maxVal excluding maxVal
    // create an array copy named newArrEnd of numbers continuing from the index after maxVal and to the end of the input array
    // concat newArrStart to newArrEnd 
    // create an integer named maxVal2 as the max value of newArr
    // return the sum of maxVal and the max value newArr
*/ 

// my answer
function largestPairSum (numbers) {
    // declare an integer named maxVal as the max value of the input array
    let maxVal = Math.max(...numbers)
    // create an array copy of the input array named newArrStart starting from 0 to the index of maxVal excluding maxVal
    let newArrStart = numbers.slice(0, numbers.indexOf(maxVal)) 
    // create an array copy named newArrEnd of numbers continuing from the index after maxVal and to the end of the input array
    let newArrEnd = numbers.slice(numbers.indexOf(maxVal) +1)
    // concat newArrStart to newArrEnd 
    let newArr = newArrStart.concat(newArrEnd)
    // create an integer named maxVal2 as the max value of newArr
    let maxVal2 = Math.max(...newArr)
    // return the sum of maxVal and the max value newArr 
    return maxVal + maxVal2
}
// my answer refactored 
function largestPairSum (numbers) {
    let maxVal = Math.max(...numbers)
    let newArr = numbers.slice(0, numbers.indexOf(maxVal)).concat(numbers.slice(numbers.indexOf(maxVal) +1))
    let maxVal2 = Math.max(...newArr)
    return maxVal + maxVal2
}
// my answer refactored into a one line return without variables (not Dry code)
function largestPairSum (numbers) { 
    return Math.max(...numbers) + Math.max(...numbers.slice(0, numbers.indexOf(Math.max(...numbers))).concat(numbers.slice(numbers.indexOf(Math.max(...numbers)) +1)))
}
// my answer refactored arrow fn implicit return Codewars Only
const largestPairSum = (numbers) => Math.max(...numbers) + Math.max(...numbers.slice(0, numbers.indexOf(Math.max(...numbers))).concat(numbers.slice(numbers.indexOf(Math.max(...numbers)) +1)))

console.log(largestPairSum([10,14,2,23,19])) // 42
console.log(largestPairSum([-100,-29,-24,-19,19])) // 0
console.log(largestPairSum([1,2,3,4,6,-1,2])) // 10
console.log(largestPairSum([-10, -8, -16, -18, -19])) // -18

// best practices and most clever
// I completely forgot about the .sort() method.
// sort the array in descending and add the first two values
function largestPairSum(numbers){
    numbers.sort(function(a, b){ return b - a });
    return numbers[0] + numbers[1];
}

// same as best practices and most clever but pulling out the first two values as variable declarations
function largestPairSum(numbers) {
    var [a, b] = numbers.sort((a, b) => b - a)
    return a + b
  }

// lol same answer as me but using .splice()
function largestPairSum (numbers) {
    let firstLargest = Math.max(...numbers);
    let firstLargestIdx = numbers.indexOf(firstLargest);
    numbers.splice(firstLargestIdx, 1);

    let secondLargest = Math.max(...numbers);
    let secondLargestIdx = numbers.indexOf(secondLargest);
    numbers.splice(secondLargestIdx, 1);

    return firstLargest + secondLargest;
}

// This should be most clever imo arrow fn of best practices and including 0 to maintain type safety
const largestPairSum = ($) => $.sort((a, b)=> a > b).slice(-2).reduce((a, b) => a + b, 0)

// clever
// sorting in ascending then slicing the last 2 values and adding them with .reduce()
var largestPairSum=(n)=>n.sort((a,b)=>a-b).slice(-2).reduce((sum,curr)=>sum+curr)