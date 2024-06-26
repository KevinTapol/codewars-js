/*
Array element parity

Parameters or Edge Cases:
    input will be an array of integers that can be negative or positive
    the only-positive or only-negative integer may appear more than once

Return:
    the integer that may or may not be repeated but will never be both positive and negative in repetition

Examples:
[1, -1, 2, -2, 3] => 3
[-3, 1, 2, 3, -1, -4, -2] => -4
[1, -1, 2, -2, 3, 3] => 3

Pseudocode:
    iterate through the input array and filter by values that if negative they do not have a positive and if positive do not have a negative
    return the first element of the filtered array
*/

// My Answer
function solve(arr){
    let result = []
    for (let e of arr){
        if (!arr.includes(-e)){
            result.push(e)
        }
    }return result[0]
}

// My Answer refactored
function solve(arr){
    return arr.filter(e => !arr.includes(-e))[0]
}

// My Answer one liner arrow fn
const solve = (a) => a.filter(e => !a.includes(-e))[0]

console.log(solve([1, -1, 2, -2, 3])) // 3
console.log(solve([-3, 1, 2, 3, -1, -4, -2])) // -4
console.log(solve([1, -1, 2, -2, 3, 3])) // 3

// Best Practices and Most Clever
// using .find() instead of .filter() but the same logic
const solve=a=>a.find(e=>!a.includes(-e));

// Brute force for loop by index checking for opposites
function solve(arr){
    for (var i=0; i<arr.length; ++i)
      if (arr.indexOf(-arr[i])==-1)
        return arr[i];
  };