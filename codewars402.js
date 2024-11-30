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

// 
function matrixAddition(a, b){
    let result = a

    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < a[i].length; j++){
            result[i][j] = a[i][j] + b[i][j]
        }
    }
    return result
}

console.log(matrixAddition( [ [1, 2, 3], [3, 2, 1], [1, 1, 1] ], [ [2, 2, 1], [6, 4, 4], [2, 2, 4] ] ))

// let a = [ [1, 2, 3], [3, 2, 1], [1, 1, 1] ]
// let b = [ [2, 2, 1], [6, 4, 4], [2, 2, 4] ]
// let c = a[1][0] + b[1][0]
// let z = [[0,0,0],[0,0,0],[0,0,0]]
// z[1][0] = c
// console.log(z)