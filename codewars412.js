/*
Array comparator
You have two arrays in this kata, every array contains unique elements only. Your task is to calculate number of elements in the first array which are also present in the second array.

Parameters or Edge Cases:
    both inputs will be arrays containing random unique elements including strings and integers

Return:
    return the count of elements that exist in both array inputs

Examples:
    ['Perl','Closure','JavaScript'], ['Go', 'C++','Erlang'] --> 0
    ['incapsulation','OOP','array'], ['time', 'propert','paralelism','OOP'] --> 1
    [1,2,3,4,5], [2,3,4,5,6] --> 4

Pseudocode:
    concat the input arrays into one array named inputs
    create a unique set from the concatenated array inputs named unique
    return the difference of the length inputs and unique
*/

// My Answer
function matchArrays(v,r){
    const inputs = v.concat(r)
    const unique = [...new Set(inputs)]
    return inputs.length - unique.length
}

// My Answer refactored
function matchArrays(v,r, arr = v.concat(r)){
    return arr.length - [...new Set(arr)].length
}

// My Answer refactored one liner arrow fn
const matchArrays = (v,r, arr = v.concat(r)) => arr.length - [...new Set(arr)].length

console.log(matchArrays(['incapsulation','OOP','array'], ['time', 'propert','paralelism','OOP'])) // 1