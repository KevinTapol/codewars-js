/*
Matrix to Object

Take in an object of key value pairs and return a 2d array where each element is an array of each key value pair.

Object.entries(object) takes that object of key value pairs and returns a nested array of elements of those key value pairs aka matrix

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]] --> {name: "Jeremy", age: 24, role: "Software Engineer"}  

Parameters or Edge Cases:
    inputs will be 2d arrays aka matrixes of 
    every element will be a string

Return:
    return an object of key value pairs of the input matrix or 2d array

Examples:
    [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]] --> {name: "Jeremy", age: 24, role: "Software Engineer"}

Pseudocode:
    declare an empty object named result
    iterate through the array and assign the index element of 0 for each element as the key and the element at index 1 as the value for the pair
    return the object
*/

// Best Practices and Most Clever using Object.fromEntries(matrix)
function matrixToObj(matrix){
    return Object.fromEntries(matrix) 
}

// My Answer using .reduce()
function matrixToObj(matrix){
    return matrix.reduce((acc, [key, value]) => {
        acc[key] = value
        console.log(acc[key])
        return acc
    }, {})
}

// My Answer using brute force for loop
function matrixToObj(matrix){
    const obj = {}

    for (let i = 0; i < matrix.length; i++) {
        const [key, value] = matrix[i];
        obj[key] = value;
    }return obj
}

console.log(matrixToObj([["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]])) // { age: 24, name: 'Jeremy', role: 'Software Engineer' }