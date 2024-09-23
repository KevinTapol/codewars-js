/*
Find Duplicates
Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

Parameters or Edge Cases:
    inputs will be arrays that can be empty
    elements of the array can be strings or integers
    elements may be duplicates
    string representations of integers will not be considered duplicates of each other

Return:
    return an array of duplicates not counting the first appearance of the duplicates

Examples:
    [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
    [0, 1, 2, 3, 4, 5]                ==>  []
    [] ==>  []

Pseudocode:
    declare an empty array named result
    double for loop
    iterate through the input array take the first element of the input array and compare it with the next till the end
        if any of the compared elements are duplicates push it to the array result
    return the array result
*/

// My Answer
function duplicates(arr) {
    let result = []
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                result.push(arr[j])
            }
        }
    }return result
}

console.log(duplicates([1, 2, 4, 4])) // [4]