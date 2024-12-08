/*
Length of missing array
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Parameters or Edge Cases:
    inputs will be a matrix or 2D array of 1D array of elements 
    the elements can be integers, strings or null
    the input array can be empty

Return:

Examples:
    [ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]  --> 3
    [ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]  --> 2
    [ [ null ], [ null, null, null ] ]  --> 2
    [ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]]  --> 5
    [ ] --> 0

Pseudocode:

*/

// My Answer
// function getLengthOfMissingArray(matrix) {
//     console.log(matrix)
//     if(!matrix){
//       return 0
//     }
//     matrix.sort((a, b) => a.length - b.length)
//     for(let i = 0; i < matrix.length -1; i++){
        
//         if(matrix[i].length + 1 != matrix[i + 1].length){
//             return matrix[i].length + 1
//         } 
//     } return 0
// }

// conflicting instructions for what to return for null cases
/*
failing on the following edge cases
[]

null

[ [], [ 1, 2, 2 ] ]

[ [ 1, 2, 2 ], null ]

*/
function getLengthOfMissingArray(matrix) {
    console.log(matrix)
//     console.log('next')
    if(!matrix){
      return 0
    }
    if(matrix === null){
      return 0
    }
    if(matrix.length === 0){
      return 0
    }
    matrix.sort((a, b) => a.length - b.length)
    
    if(Array.isArray(matrix[0]) && matrix[0].length === 0){
      return 0
    }
  
  
    for(let i = 0; i < matrix.length -1; i++){
        
        if(matrix[i].length + 1 != matrix[i + 1].length){
            return matrix[i].length + 1
        } 
    } return 0
}

// console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]])) // 3
let r = []
console.log(Array.isArray(r))