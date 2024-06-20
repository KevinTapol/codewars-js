/*
Find the missing element between two arrays

Parameters or Edge Cases:
    inputs will be 2 arrays of integers
    the 1st input array length will be greater than or equal to 1
    the 2nd array will contain all of the 1st arrays elements but not at the same index and will exclude one element
    duplicates may exist so checking for numerical values existing in one and not the other is not a valid solution 

Return:
    return the integer that exists in the 1st input array that is missing in the 2nd input array
Examples:
    [1, 2, 3], [1, 3]  -->  2
    [6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]  -->  8
    [7], []  -->  7
    [4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]  -->  3
    [0, 0, 0, 0, 0], [0, 0, 0, 0]  -->  0
Pseudocode:
    sort both arrays
    iterate through the 1st sorted array and return the first element that does not exist at the same index of each
*/

// My Answer
function findMissing(arr1, arr2) {
    let sortArr1 = arr1.sort((a, b) => a - b)
    let sortArr2 = arr2.sort((a, b) => a - b)
    for (let i = 0; i <= sortArr1.length; i++){
        if (sortArr1[i] != sortArr2[i]){
            return sortArr1[i]
        }
    }
}

// My Answer using .filter()
function findMissing(a1, a2){
    let sa1 = a1.sort((a, b) => a - b)
    let sa2 = a2.sort((a, b) => a - b)
    return sa1.filter((e, i) => sa1[i] != sa2[i])[0]
}
console.log(findMissing([1, 2, 3], [1, 3])) // 2

// Best Practices
// using .sort() I didn't know that ascending is default so a - b is not needed
const findMissing = (arr1, arr2) => {
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] != arr2[i]) return arr1[i];
    }
}

// Most Clever
// using .reduce() on both arrays then subtracting the difference to return the missing element which the description said would not work
function findMissing(arr1, arr2) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
 return arr1.reduce(reducer, 0) - arr2.reduce(reducer, 0);
}

// lol description said USING SUMS OF INTEGERS WILL NOT WORK! but this is exactly that
const sum = arr => arr.reduce((a, b) => a + b, 0);
const findMissing = (arr1, arr2) => sum(arr1) - sum(arr2);

// using bitwise ^
function findMissing(arr1, arr2) {
    return arr1.reduce((a,b)=>a^b,0) ^ arr2.reduce((a,b)=>a^b,0)
}

// bitwise with .concat() and .reduce()
const findMissing = (arr1, arr2) => arr1.concat(arr2).reduce((a, b) => a ^ b, 0);

// cleaner version of my refactored answer
function findMissing(arr1, arr2) {
    return arr1.sort().filter((e,i) => arr2.sort()[i] !== e)[0]
}