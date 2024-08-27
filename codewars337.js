/*
How many consecutive numbers are needed?
Write a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.

Example
[4, 8, 6] --> 2
Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

[-1, -5] --> 3
Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

Parameters or Edge Cases:
    inputs will be an array of integers 
    integers will be unique meaning no duplicates will occur
    integers can be negative or positive
    arrays can be empty

Return:
    return an integer representing a count of integers needed to make the values of the input array consecutive

Examples:
    [4, 8, 6] --> 2
    [1, 2, 3, 4] --> 0
    [] --> 0
    [1] --> 0

Pseudocode:
    if the input array length is less than 2 return 0
    create an array with the smallest and highest value of the input array with consecutive values meaning + 1
    return the difference of the new array length and the input array length
*/

//  My Answer
function consecutive(arr) {
    if(arr.length < 2){
        return 0
    } else {
        let min = Math.min(...arr)
        let max = Math.max(...arr)
        let newArr = []
        for(let i = min ; i <= max; i++){
            newArr.push(i)
        }return newArr.length - arr.length
    } 
}

// My Answer refactored using Array.from() to create an array instead of a for loop with a ternary conditional for input arrays with lengths less than 2
function consecutive(arr){
    return arr.length < 2 ? 0 : Array.from({length: Math.abs((Math.max(...arr) - Math.min(...arr))+1)}, (e, i) => e = Math.min(...arr) + i).length - arr.length
}

// My Answer one liner arrow fn
const consecutive = a => a.length < 2 ? 0 : Array.from({length: Math.abs((Math.max(...a) - Math.min(...a))+1)}, (e, i) => e = Math.min(...a) + i).length - a.length

console.log(consecutive([4, 8, 6])) // 2
console.log(consecutive([1])) // 0
console.log(consecutive([])) // 0

// Best Practices and Most Clever
// O notation Similar to Guass Theorem Note to Self memorize Theorems Gauss n such
// using truthy falsy of the input array length as conditionals for ternary. Then take the difference of the highest and lowest value subtract the result by the length of the input array, add 1 for the case of 0 index element and return the result.
function consecutive(arr){
    let l = arr.length;
    return l ? Math.max(...arr) - Math.min(...arr) - l + 1 : 0;
}

// Clever to use a pipe character instead of a ternary
const consecutive = arr => Math.max(...arr) - Math.min(...arr) - arr.length + 1 | 0;

// Similar to my Array.from() answer but sorting and calling by index instead of using Math object methods and spread operator for array iteration
function consecutive(arr, a = arr.sort((a,b)=> a-b)) {
    a = Array.from({length: a.slice(-1)[0] - a[0] + 1}, (_,i)=> i+a[0])
    return a.length - arr.length
}