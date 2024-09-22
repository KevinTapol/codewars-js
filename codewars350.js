/*
Find sum of top-left to bottom-right diagonals
Given a square matrix (i.e. an array of subarrays), find the sum of values from the first value of the first array, the second value of the second array, the third value of the third array, and so on...


Parameters or Edge Cases:
    inputs will be a 2d array with each element being several integers

Return:
    return the sum of the elements at the index value of the inner array index value of the same index value of the array

Examples:

array = [[1, 2],
         [3, 4]]

diagonal sum: 1 + 4 = 5

array = [[5, 9, 1, 0],
         [8, 7, 2, 3],
         [1, 4, 1, 9],
         [2, 3, 8, 2]]

diagonal sum: 5 + 7 + 1 + 2 = 15

Pseudocode:
    find the n index array and n index item in the array
    sum all the integers and return the sum
*/

// My Answer brute force for loop
function diagonalSum(matrix){
    let sum = 0
    for(let i = 0; i < matrix.length; i++){
        sum += matrix[i][i]
    }return sum
}

// My Answer using array methods
function diagonalSum(arr){
    return arr.map((e, i) => arr[i][i]).reduce((acc, c) => acc + c, 0)
}

// My Answer refactored one liner arrow fn
const diagonalSum = arr => arr.map((e, i) => arr[i][i]).reduce((acc, c) => acc + c, 0)

console.log(diagonalSum([[1, 2], [3, 4]])) // 5

// Best Practices and Most Clever
// 3rd param of .reduce() is index .reduce((accumulator, currentValue, currentIndex, array))
// instead of using .map() to call by index of the array, here they are using the 3rd parameter of .reduce()
function diagonalSum(m){
    return m.reduce(function(s,r,i){return s+r[i]},0)
}