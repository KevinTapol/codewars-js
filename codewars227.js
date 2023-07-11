// Flatten and sort an array
/*
Challenge:
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
Addendum:
Please, keep in mind, that JavaScript is by default sorting objects alphabetically
*/ 

// Parameters or Edge Cases:
/*
    inputs will be nested arrays that may contain positive or negative integers
    arrays can be empty or null including nested arrays
*/ 

// Return:
/*
    a one dimensional array of all integers sorted from lowest to highest integer value
*/ 

// Examples:
/*
    [] => []
    [[], []] => []
    [[], [1]] => [1]
    [[3, 2, 1], [7, 9, 8], [6, 4, 5]] => [1, 2, 3, 4, 5, 6, 7, 8, 9]
    [[1, 3, 5], [100], [2, 4, 6]] => [1, 2, 3, 4, 5, 6, 100]
*/ 

// Pseudocode:
/*
    // flatten the input array with the method .flat()
    // sort the array from lowest to highest with .sort()
    // return the result
*/ 

// my answer
function flattenAndSort(array) {
    // flatten the input array with the method .flat() and name it result
    result = array.flat()
    // sort the array from lowest to highest with .sort()
    result.sort((a,b) => a - b)
    // return the result
    return result
}

// my answer refactored
function flattenAndSort(array) {
    return array.flat().sort((a,b) => a-b)
}

// my answer arrow fn implicit return for Codewars only
const flattenAndSort = (array) => array.flat().sort((a,b) => a-b)

console.log(flattenAndSort([])) // []
console.log(flattenAndSort([[], []])) // []
console.log(flattenAndSort([[], [1]])) // [1]
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])) // [1, 2, 3, 4, 5, 6, 100]

// best practice and most clever
// here they are using a spread operator ... to iterate through the input array and concat the elements to an empty array instead of using .flat()
function flattenAndSort(array) {
    return [].concat(...array).sort((a,b) => a - b);
}

// using .reduce() to iterate through the input array and concat the elements to an empty array instead of using .flat()
function flattenAndSort(array) {
    return array
      .reduce((result, current) => [...result, ...current],[])
      .sort((a, b) => a - b)
      ;
}

// brute force nested for loop
function flattenAndSort(array) {
    var newArray = [];
    for(var i =0;i<array.length;i++) {
      for(var j=0;j<array[i].length;j++) {
        newArray.push(array[i][j]);
      }
    }  
    return newArray.sort((a,b) =>  a-b);
}

// clever to convert to string, converting into a single array, filtering out only the integers, creating a copy of each element as a number and finally sorting the array
const flattenAndSort = $ => $.toString().split(',').filter(e => e).map(Number).sort((a,b)=>a-b)