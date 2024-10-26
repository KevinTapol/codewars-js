/*
Homogenous arrays

Parameters or Edge Cases:
    input will be an 2d array or matrix with each element array containing strings and/or integers
    do not return empty arrays for this kata

Return:
    return a 2d array of the input 2d array where each internal array element contains the same type of elements and maintain the order of the original input 2d array

Examples:
    [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]] --> [[1, 5, 4], ['b']]
    [[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []] --> [[123, 234, 432], ['', 'abc'], [''], ['', '1']]

Pseudocode:
    create a shallow copy array of the input 2d array or matrix filtering the internal arrays where they are not empty and contain the same type of element of either all integers or all strings
    return the filtered 2d array or matrix
*/

// My Answer
function filterHomogenous(matrix) {
    return matrix.filter(e => e.length > 0 && e.every(el => typeof(el) === typeof(e[0])))
}

// My Answer refactored one liner arrow fn, Best Practices and Most Clever
const filterHomogenous = matrix => matrix.filter(e => e.length > 0 && e.every(el => typeof(el) === typeof(e[0])))

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]])) // [[1, 5, 4], ['b']]

// Brute force for loop of the same logic
function filterHomogenous(arrays) {
    return arrays.filter(arr => isOneType(arr))
    
    function isOneType(array) {
      const count = {}
      for (const el of array) {
        if (!count[typeof el]) {
          count[typeof el] = 1
        } else {
          count[typeof el] += 1
        }
      }
      return Object.keys(count).length === 1
    }
}

// Brute force for loop creating a new array and pushing where logic is met
function filterHomogenous(arrays) {
    const resArray = []
    for(let i = 0; i< arrays.length;i++){
      if(arrays[i].length === 0){
        ""
      } else {
        arrays[i].every(el=> typeof arrays[i][0]  === typeof el) ? resArray.push(arrays[i]) : ""
      }
    }
     return resArray;
}

// clever because every element will either be type number or type string
function filterHomogenous(arrays) {
    return arrays.filter(arr => arr.length&&(arr.every(e => typeof e=='number')||arr.every(e => typeof e=='string')));
}