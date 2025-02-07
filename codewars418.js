/*
Matrix creation
Create an identity matrix of the specified size ( >= 0 ).


Parameters or Edge Cases:
    inputs will be an integer

Return:
    return an array of elements with the length of the input integer and each element is an array with the length of the input integer where the 1D array of elements each contain all 0's except for one 1 at the 1D index of the 2D array

Examples:
    (1)  =>  [[1]]

    (2) => [ [1,0],
             [0,1] ]

           [ [1,0,0,0,0],
             [0,1,0,0,0],
    (5) =>   [0,0,1,0,0],
             [0,0,0,1,0],
             [0,0,0,0,1] ] 

Pseudocode:
    create an empty array named result
    iterate from 0 to the input integer incrementing by 1 the iterator is less than the input integer
        create a local array named locArr with a length of the input integer filled with 0's
        reassign the value at the current iterator to 1
        push locArr to result
    return result


*/

// My Answer brute force for loop
function getMatrix(int) {
    let result = []
    for(let i = 0; i < int; i++){
        let locArr = Array.from({length: int}, e => e = 0)
        locArr[i] = 1
        result.push(locArr)
    }
    return result
} 

console.log(getMatrix(2)) // [ [1,0],[0,1] ]

// Best Practices
// using Array.fill() instead of Array.from()
function getMatrix(number) {
    const matrix = [];
    for (let i = 0; i < number; i++) {
      matrix[i] = Array(number).fill(0)
      matrix[i][i] = 1;
    }
    return matrix;
} 

// Most Clever
getMatrix=n=>[...Array(n)].map((_,i)=>[...Array(n)].map((_,j)=>+(i==j)))

// nested for loop
function getMatrix(size) {
    var matrix = [];
    for(var i = 0; i < size; i++) {
      matrix[i] = [];
      for(var j = 0; j < size; j++) {
        matrix[i][j] = (i == j ? 1 : 0);
      }
    }
    return matrix;
}