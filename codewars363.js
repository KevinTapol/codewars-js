/*
Merge two arrays

Parameters or Edge Cases:
    The arrays may be of different lengths, with at least one character/digit.
    One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

Return:
    return a single array of the two input array elements alternated starting with the first input array

Examples:
    [1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e'] --> [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]
    ['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5] --> ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]
    [2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's'] --> [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']
    ['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6] --> ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']

Pseudocode:
    declare an empty array named result
    while both input arrays are not empty shift off the inputs from the front and pushing them to the empty array result starting with the first input
    return the array
*/

// My Answer
function mergeArrays(a, b) {
    let result = []
    while(a.length != 0 || b.length != 0){
        result.push(a.shift())
        result.push(b.shift())
    }return result.concat(a).concat(b).filter(e => e != undefined)
}
console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e'])) // [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]

// Best Practices and Most Clever
// clever to check if an element still exists in the array then push that element
function mergeArrays(a, b) {
    var returnArray = [];
    var counter = 0;
    while (a[counter] || b[counter] ){
      if(a[counter]){
        returnArray.push(a[counter]);
      }
      if(b[counter]){
        returnArray.push(b[counter]);
      }
      counter++;
      
     }
     return returnArray;
}

// checking array lengths before iteration
function mergeArrays(a, b) {
    let j = [],
        longest = a.length > b.length ? a:b;
    for (var i=0; i<longest.length; i++){
      if (a[i]) j.push(a[i])
      if (b[i]) j.push(b[i])
    }
    return j
}

// array length check in the stop condition
function mergeArrays(a, b) {
    var answer = [];
    
    for (i = 0; i < Math.max(a.length, b.length); i++){
      if (i < a.length) {answer.push(a[i]);}
      if (i < b.length) {answer.push(b[i]);}
    }
    return answer; 
}

// using a lodash
const _ = require('lodash')

function mergeArrays(a, b) {
  return _.compact(_.flatten(_.zip(a, b)))
}

// one liner .reduce() with the same logic as my while loop
const mergeArrays = ( $ , $2) => [...Array($.length + $2.length)].reduce((acc, el, i) => acc.concat( $[i],$2[i]), []).filter(e => e)

// using array spread operator in conditionals instead of before .reduce()
const mergeArrays = (a, b) => a.reduce((pre, val) => b.length ? [...pre, val, b.shift()] : [...pre, val], []).concat(b);