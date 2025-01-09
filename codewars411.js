/*
Alternate Square Sum
Complete the function that takes an array of integers as input and finds the sum of squares of the elements at even positions (i.e. 2nd, 4th, etc.) plus the sum of the rest of the elements at odd position.

For empty arrays, result should be zero (except for Haskell).

Note
The values at even positions need to be squared. For a language with zero-based indices, this will occur at oddly-indexed locations. For instance, in Python, the values at indices 1, 3, 5, etc. should be squared because these are the second, fourth, and sixth positions in the list.

Example
[11, 12, 13, 14, 15]  -->  379
# 1.  2.  3.  4.  5.  position

11 + 12^2 + 13 + 14^2 + 15 = 379
Explanation:

Elements at indices 0, 2, 4 are 11, 13, 15 and they are at odd positions as 11 is at position #1, 13 is at position #3 and 15 at #5.

Elements at indices 1, 3 are 12 and 14 and they are at even position. So we need to add 11, 13, 15 as they are and square of 12 and 14

Parameters or Edge Cases:
    inputs will be an array of integers
    arrays may be empty

Return:
    return the sum of the square of each element at odd indexes and the sum of the even indexes

Examples:
    [] --> 0
    [1,2,3,4,5] --> 29
    [-1,0,-3,0,-5,3] --> 0
    [-1,2,-3,4,-5] --> 11

Pseudocode:
    declare a variable named sum and set it equal to 0
    iterate through the input array and if the current index is odd then square the value and add it to the variable sum
    return sum

*/

// My Answer brute force for loop
function alternateSqSum(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        if(i % 2 != 0){
            sum += (arr[i]*arr[i])
        } else {
            sum += arr[i]
        }
    }return sum
}

// My Answer refactored
function alternateSqSum(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        i % 2 != 0 ? sum += (arr[i]*arr[i]) : sum += arr[i]
    }return sum
}

// My Answer using array methods
function alternateSqSum(arr){
    return arr.reduce((acc, c, i) => i % 2 != 0 ? acc + arr[i]*arr[i] : acc + arr[i], 0)
}

// My Answer using array methods one liner arrow fn
const alternateSqSum = arr =>  arr.reduce((acc, c, i) => i % 2 != 0 ? acc + arr[i]*arr[i] : acc + arr[i], 0)


console.log(alternateSqSum([1,2,3,4,5])) // 29

// Best Practices and Most Clever
// similar to my .reduce() answer but using Math.pow(e, 2) instead of e*e
function alternateSqSum(arr){
    return arr.reduce(function(prev, cur, index) {
      return prev + ( index % 2 ? Math.pow(cur, 2) : cur );
    }, 0);
}

// similar to my .reduce() but using e**2 instead of e*e
const alternateSqSum = arr => arr.reduce((pre, val, idx) => pre + (idx % 2 ? val ** 2 : val), 0);

// using .map() to create a new array of squares of odd indexes and then using .reduce()
function alternateSqSum(arr) {
    return arr.map((v, i) => i % 2 === 1 ? v * v : v).reduce((p, c) => p + c, 0);
}