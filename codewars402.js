/*
Matrix Addition

Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size N x N (square), containing only integers.

How to sum two matrices:

Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix. This will be cell [n][m] of the solution matrix. (Except for C where solution matrix will be a 1d pseudo-multidimensional array).

Visualization:

|1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
|3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
|1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|
matrixAddition(
  [ [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1] ],
//      +
  [ [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3] ] )

// returns:
  [ [3, 4, 4],
    [6, 4, 4],
    [2, 2, 4] ]

Parameters or Edge Cases:
    there will be 2 inputs
    inputs will each be a matrix
    each matrix will not have the same 2D length or 1D length

Return:
    return a single matrix that is the sum of both inputs of the elements at their respective indexes

Examples:
[   [1, 2, 3],      [ [2, 2, 1],      [ [3, 4, 4],
    [3, 2, 1],   +    [6, 4, 4],   =    [6, 4, 4],
    [1, 1, 1] ]       [2, 2, 4] ]       [2, 2, 4] ]

Pseudocode:
    create a copy of either of the input arrays and name it result (reason to have the same 2D length and overwrite)
    create a nested for loop where the outer for loop references the current 1D array and the inner for loop references the current index
        set the array result 1D array index equal to the sum of both inputs
    return the array result

*/

// My Answer brute force nested for loop
function matrixAddition(a, b){
    let result = a

    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < a[i].length; j++){
            result[i][j] = a[i][j] + b[i][j]
        }
    }
    return result
}

// My Answer using nested .map() instead of nested for loops
function matrixAddition(a, b, z = a){
    return z.map((e, i) => e.map((el, j) => el = a[i][j] + b[i][j]))
}

// Ny Answer refactored one liner arrow fn array methods
const matrixAddition = (a, b, z = a) => z.map((e, i) => e.map((el, j) => el = a[i][j] + b[i][j]))

console.log(matrixAddition( [ [1, 2, 3], [3, 2, 1], [1, 1, 1] ], [ [2, 2, 1], [6, 4, 4], [2, 2, 4] ] ))

// Best Practices and Most Clever
function matrixAddition(a, b){
    return a.map(function(n, i){
      return n.map(function(o, j){
        return o + b[i][j];
      });
    });
}

// Best Practices and Most Clever refactored using arrow fn
// similar to my nested .map() but since they are referencing a for the input the inner nested current element of o is equivalent to a[i][j]
function matrixAddition(a, b){
    return a.map((n, i) => n.map((o, j) => o + b[i][j]))
}

// same as Best Practices and Most Clever but using row and column to reference current element which is great for a mental picture of the matrix
function matrixAddition(a, b){
    return a.map(function(row, i) {
      return row.map(function(col, ii) {
        return col + b[i][ii];
      });
    });
}

// same idea with great mental picture declared variables of nested .map()
const matrixAddition = (a, b) => a.map((row, rowIndex) => row.map((value, columnIndex) => value + b[rowIndex][columnIndex]));

// nested for loop except they are using an empty array local for loop assign the sums to instead of copying the structure of one of the inputs
function matrixAddition(a, b){
    var c = [];
    for(var n = 0; n < a.length; n++){
      c[n] = [];
      for(var m = 0; m < a[n].length; m++){
        c[n][m] = a[n][m] + b[n][m];
      }
    }
    return c;
  }

// recursion
function matrixAddition(a, b){
    var c = [];
  
    for (var i = 0; i < a.length; i++) {
      c[i] = (typeof a[i] !== 'number') ? matrixAddition(a[i], b[i]) : a[i] + b[i];
    }
    
    return c;
}