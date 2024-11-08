/*
Change two-dimensional array

Parameters or Edge Cases:
    input will be a matrix or 2D Array square where the number of elements in the 2D array is the same as the number of element in each 1D array

Return:
    return the 2D Array input Diagonal but with each 1D Array index location respective element index location changed for each element that is all elements less than 0 changed to 0 and elements greater than 0 changed to 1

Examples:
[
  [-1,  4, -5, -9,  3 ],
  [ 6, -4, -7,  4, -5 ],
  [ 3,  5,  0, -9, -1 ],
  [ 1,  5, -7, -8, -9 ],
  [-3,  2,  1, -5,  6 ]
] -->
[
  [ 0,  4, -5, -9,  3 ],
  [ 6,  0, -7,  4, -5 ],
  [ 3,  5,  1, -9, -1 ],
  [ 1,  5, -7,  0, -9 ],
  [-3,  2,  1, -5,  1 ]
]
Pseudocode:
    create an array copy targeting each 1D array index in the 2D array and use that index as the target for each element of each 1D array to grab the element
        if the value is less than 0 set it equal to 0 else set it equal to 1
    return the new 2D array
}
*/

// My Answer
function matrix(array) {
    for (let i=0; i<array.length; i++) {
      if(array[i][i] < 0){
        array[i][i] = 0
      } else {
        array[i][i] = 1
      }
    }
    return array;
}

// My Answer refactored ternary
function matrix(array) {
    for (let i=0; i<array.length; i++) {
      array[i][i] < 0 ? array[i][i] = 0 : array[i][i] = 1
    }
    return array;
}

console.log(matrix([
    [-1,  4, -5, -9,  3 ],
    [ 6, -4, -7,  4, -5 ],
    [ 3,  5,  0, -9, -1 ],
    [ 1,  5, -7, -8, -9 ],
    [-3,  2,  1, -5,  6 ]
])) 
// /*
// [
//   [ 0,  4, -5, -9,  3 ],
//   [ 6,  0, -7,  4, -5 ],
//   [ 3,  5,  1, -9, -1 ],
//   [ 1,  5, -7,  0, -9 ],
//   [-3,  2,  1, -5,  1 ]
// ]
// */


console.log(matrix([ 
    [ +0, 4, -5, -9, 3 ],
    [ 6, +0, -7, 4, -5 ],
    [ 3, 5, 1, -9, -1 ],
    [ 1, 5, -7, +0, -9 ],
    [ -3, 2, 1, -5, +0 ]
  ]))
/*
[ [ 1, 4, -5, -9, 3 ],
  [ 6, 1, -7, 4, -5 ],
  [ 3, 5, 1, -9, -1 ],
  [ 1, 5, -7, +0, -9 ],
  [ -3, 2, 1, -5, 1 ] ]
*/

// Best Practices and Most Clever
// Refactored ternary statement setting e = fn instead of ternary  
function matrix(array) {
    for (let i=0; i<array.length; i++) {
      array[i][i] = array[i][i] < 0 ? 0 : 1
    }
    return array;
}

//nested .map() 
function matrix(a) {
    return a.map((a,i)=>a.map((a,j)=>i==j?+!(a<0):a))
}

// cleaner variable declarations and one liner version of nested .map() with a bang conditional
const matrix = array => array.map((i, x) => i.map((j, y) => x == y ? +!(j < 0) : j))

// same as above but final check it not a bang conditional
const matrix = (arr) =>  arr.map((part, i)=> part.map((el, j) => j === i ? el < 0 ? 0 : 1 : el))

// .splice()
function matrix(array) {
    return array.map((item, index) => {
         item.splice(index, 1, item[index] >= 0 ? 1 : 0);
         return item;
     }); 
}

// very clever variable declarations to specify 1D array as a row idx and length for Array.from()
const matrix = array => array.map((row, idx, {length}) => Array.from({...row, [idx]: +(row[idx] >= 0), length}));