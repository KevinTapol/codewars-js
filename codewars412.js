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

// Best Practices and Most Clever
// very clever to check if there is an index where the current element from the array v that exists in the array r by using not equal to -1 meaning not not exist
const matchArrays = (v, r) => v.filter(e => r.indexOf(e) != -1).length;

// Brute force nested for loop
function matchArrays(v,r){
    var i, j, result = 0;
    for (i = 0; i < v.length; i++) {
      for (j = 0; j < r.length; j++) {
        if (v[i] === r[j])
          result++;
      }
    }
    return result;
}

// using .filter() .includes() and .length
const matchArrays = (a, b) => a.filter(e => b.includes(e)).length;

// using .reduce on one array to count the elements included in the 2nd array
const matchArrays = (v,r) => v.reduce((pre, val) => pre + r.includes(val), 0);