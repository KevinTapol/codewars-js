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
function getLengthOfMissingArray(matrix) {
  if(matrix === null || matrix.includes(null) || !matrix){
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

console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]])) // 3
console.log(getLengthOfMissingArray([])) // 0
console.log(getLengthOfMissingArray([ null ])) // 0
console.log(getLengthOfMissingArray(null)) // 0

// Best Practices
// This does a check for length of null or zero and .sort then .includes() to return 0 for all cases of if the input is null empty or if a 1D array includes null or 0. Then does the iteration via for loop for cases to return the length of the missing element.
function getLengthOfMissingArray(arrayOfArrays) {
  const lengths = (arrayOfArrays || [])
    .map(a => a ? a.length : 0)
    .sort((a, b) => a - b)
  
  if (lengths.includes(0)) {
    return 0
  }

  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i] + 1 !== lengths[i + 1]) {
      return lengths[i] + 1
    }
  }

  return 0
}

// Most Clever
function getLengthOfMissingArray(arr) {
  return !arr||(ar=arr.map((x,i)=>x?x.length:0).sort((a,b)=>a-b)).indexOf(0)>-1
         ?0:ar.filter((x,i)=>x!=i+ar[0]).concat([1])[0]-1
}

// one liner arrow fn
const getLengthOfMissingArray = arrayOfArrays =>
  (arr => arr.length && arr.every(Boolean) ? arr.find((val, idx) => val !== arr[++idx] - 1) + 1 : 0)
  (Array.isArray(arrayOfArrays) && arrayOfArrays.map(val => val && val.length || 0).sort((a, b) => a - b) || []);

// one liner arrow fn with a .map().includes().sort().reduce()
const getLengthOfMissingArray = a => a ? (a = a.map(e => e ? e.length : 0)).includes(0) ? 0 : a
  .sort((x, y) => x - y)
  .reduce((r, e, i, a) => r ? r : (e + 1) === a[i + 1] ? 0 : e + 1, 0) : 0;

// one liner arrow fn .map().min.reduce()
getLengthOfMissingArray=a=>a?(l=a.map(a=>a?a.length:0),m=Math.min(...l)|0,m?l.reduce((x,n,i)=>x^n-m^i+1,0)+m:0):0

// one liner using .map().sort().find()
const getLengthOfMissingArray = matrix =>
  !Array.isArray(matrix) || !matrix[0] || matrix.some(x => !Array.isArray(x) || !x.length)
    ? 0
    : matrix
        .map(x => x.length)
        .sort((x, y) => x - y)
        .find((x, i, list) => (x + 1 < list[i + 1])) + 1;