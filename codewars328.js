/*
Nice Array

Parameters or Edge Cases:
    inputs will be an array of integers
    arrays can be empty

Return:
    true if the input array elements contain another element that is either 1 more or 1 less than each element else false 
    also false for empty arrays

Examples:
A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.
[2, 10, 9, 3] --> true
     2 =  3 - 1
    10 =  9 + 1
     3 =  2 + 1
     9 = 10 - 1

[4, 2, 3] --> true
    4 = 3 + 1
    2 = 3 - 1
    3 = 2 + 1 (or 3 = 4 - 1)

[4, 2, 1] --> false
    for n = 4, there is neither n - 1 = 3 nor n + 1 = 5

Pseudocode:
    iterate through the input array and for each element check if the array includes and element that is either 1 more or 1 less than the current element if not return false
    else return true
*/

// My Answer
function isNice(arr){
    if(arr.length < 1){
        return false
    }
    for(let e of arr){
        if(!arr.includes(e+1) && !arr.includes(e-1)){
            return false
        }
    }return true
}

// My Answer Refactored using array methods and nested ternary 
function isNice(arr){
    return arr.length < 1 ? false : arr.every((e) => arr.includes(e - 1) || arr.includes(e + 1) ? true : false)
}
// My Answer refactored one liner arrow fn
const isNice = a => a.length < 1 ? false : a.every((e) => a.includes(e - 1) || a.includes(e + 1) ? true : false)

console.log(isNice([2, 10, 9, 3])) // true
console.log(isNice([4, 2, 3])) // true
console.log(isNice([4, 2, 1])) // false

// Best Practices and Most Clever
// similar to my array methods answer but using !!arr.length and .some() instead of .includes() for boolean
function isNice(arr){
    return !!arr.length && arr.every(x => arr.some(y => y === x - 1 ||  y === x + 1));
}

// using Boolean()
const isNice = arr => Boolean(arr.length) && arr.every(e=> arr.includes(e-1) || arr.includes(e+1));

// brute force for loop but different from mine using index iteration instead of element
function isNice(arr){
    var counter = 0
    for(var i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] - 1) || arr.includes(arr[i] + 1)) counter ++
    }
    if (counter == arr.length && arr.length != 0) return true
    return false
}

// clever use of Math.abs instead of checking for + or - 1
const isNice = a => a.length > 0 && a.every(e => a.some(x => Math.abs(e - x) === 1));

// clever and easy to read one liner
const isNice = arr => (arr.length > 0 ? arr.every(e => arr.includes(e + 1) || arr.includes(e - 1)) : false)