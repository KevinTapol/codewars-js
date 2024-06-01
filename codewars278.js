/*
Nth Smallest Element (Array Series #4)

Parameters or Edge Cases:
    inputs will be an array of integers that can be negative or positive
    the array's length will be greater than or equal to 3
    repetitions of integers in arrays may occur

Return:
    return an integer representing the 2nd input's smallest element in the 1st input array

Examples:
    [3,1,2], 2 ==> 2 
    [15,20,7,10,4,3], 3 ==> 7 
    [2,169,13,-5,0,-1], 4 ==> 2 
    [2,1,3,3,1,2], 3 ==> 2 

Pseudocode:
    create a copy of the input array and sort it from smallest to largest
    return the element at 2nd input - 1 location

*/

// My Answer
function nthSmallest(arr, pos){
    let newArr = arr.sort((a, b) => a - b)
    return newArr[pos - 1]
}

// My Answer refactored, Best Practices and Most Clever
function nthSmallest(r, n) {
    return r.sort((a, b) => a - b)[n - 1]
}

// My Answer One liner arrow fn
const nthSmallest = (r, n) => r.sort((a, b) => a - b)[n - 1]

console.log(nthSmallest([3,1,2], 2)) // 2
console.log(nthSmallest([15,20,7,10,4,3], 3)) // 7
console.log(nthSmallest([2,169,13,-5,0,-1], 4)) // 2
console.log(nthSmallest([2,1,3,3,1,2], 3)) // 2

// Brute Force For Loop
function nthSmallest(arr, pos){
    const a = arr;//Array.from(new Set(arr));
    let n;
    for (let i =0 ; i<pos; i++) {
      n = Math.min(...a)
      a[a.indexOf(n)] = Number.MAX_SAFE_INTEGER;
    }
    return n;
  }