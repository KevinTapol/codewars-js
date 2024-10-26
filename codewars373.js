/*
Least Larger
Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.

Parameters or Edge Cases:
    1st input will be an array of integers 
    2nd input will be an integer representing index which will be valid ie always exists in the 1st input
    the array will never be empty

Return:
    return the index from the 1st input of the smallest number that is larger than the element at tne 2nd input index. If there is no such element then return -1.

Examples:
    [4, 1, 3, 5, 6], 0  --> 3
    [4, 1, 3, 5, 6], 4  --> -1
    [1, 3, 5, 2, 4], 0  --> 3  

Pseudocode:
    create a shallow copy array of the input array of values that are greater than the element of the given index 2nd input
    sort the array in ascending order, grab the value at index 0 and declare it as a variable named result
    if there is no such value then return -1
    else find the element of the variable result from the input array and return it's index

*/

// My Answer
function leastLarger(a,i) {
    let el = a[i]
    let arr = a.filter(e => e > el).sort((a, b) => a - b)
    return !arr ? -1 : a.indexOf(a.find(e => e === arr[0]))
}

// My Answer Refactored
function leastLarger(a,i) {
    let arr = a.filter(e => e > a[i]).sort((a, b) => a - b)
    return !arr ? -1 : a.indexOf(a.find(e => e === arr[0]))
}

console.log(leastLarger([4, 1, 3, 5, 6], 0)) // 3
console.log(leastLarger([4, 1, 3, 5, 6], 4)) // -1
console.log(leastLarger([ 1, 2, 3, 4, 5, 0 ], 5)) // 0

// Best Practices and Most Clever
// using Math.min() instead of .sort()
const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter(n => n > a[i])))

// Breaking the answer into separate declared variable blocks
function leastLarger(a, i) {
    const targetVal = a[i]
    const largerVals = a.filter(num => num > targetVal)
    const leastLargeVal = Math.min(...largerVals)
    
    return a.findIndex(num => num === leastLargeVal)
}

// Brute force for loop comparing elements
function leastLarger (series, targetIndex) {
    const target = series[targetIndex]
  
    let leastLargeValue = Infinity
    let leastLargeIndex = -1
  
    for (const [index, number] of series.entries()) {
      if (number > target && number < leastLargeValue) {
        leastLargeValue = number
        leastLargeIndex = index
      }
    }
  
    return leastLargeIndex
}

// comparing each element value and using conditional checks
function leastLarger(a,i) {
    let diff, index=-1;
    for (let n = 0; n < a.length; n++)
      if ((a[n]-a[i] > 0) && (diff === undefined || a[n]-a[i]<diff)) {
        diff = a[n]-a[i];
        index=n;
      }
    return index;
}