/*
Lost number in number sequence
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

Parameters or Edge Cases:
    1st input will be an array of integers sorted lowest to highest starting at 1
    2nd input can be the same array or missing a single element integer
    if the array is empty, return an empty array

Return:
    if both arrays contain the same elements, return 0 else return the missing element that exists in 1st input but not the 2nd input

Examples:
    [1,2,3,4,5], [3,4,1,5] --> 2
    [1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8] --> 5
    [1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3] --> 0

Pseudocode:
    iterate through the 1st input and if the current element does not exist in the 2nd input return that element
    outside of the iteration, return 0
*/

// My Answer
function findDeletedNumber(arr, mixArr) {
    for(let e of arr){
        if(mixArr.includes(e) === false)
            return e
    }return 0
}

// My Answer refactored using .reduce() because elements are integers that should be the same total sum
function findDeletedNumber(arr, mixArr) {
    return arr.reduce((acc, c) => acc + c, 0) - mixArr.reduce((acc, c) => acc + c, 0)
}

// My Answer One liner arrow fn
const findDeletedNumber = (arr, mixArr) => arr.reduce((acc, c) => acc + c, 0) - mixArr.reduce((acc, c) => acc + c, 0)

console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5])) //2
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8])) // 5
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3])) // 0


// Best Practices and Most Clever
// Same as my refactored answer but using separate variables on the return statement
function findDeletedNumber(arr, mixArr) {
    let arrSum = arr.reduce((a,b) => a + b, 0)
    let mixArrSum = mixArr.reduce((a,b) => a + b, 0)
    return arrSum - mixArrSum
}

// Very Clever 
// using .filter() and .indexOf() if the element doesn't exist then return the element else return 0
function findDeletedNumber(arr, mixArr) {
    return arr.filter(v=>mixArr.indexOf(v)==-1)[0]||0
}

// Same strategy as above but using a for loop instead of array.filter()
function findDeletedNumber(arr, mixArr) {
    if(arr.length === mixArr.length) return 0;
    for(var k in arr)
      if(mixArr.indexOf(arr[k]) === -1)
        return arr[k];
    return 0;
  }

// Clever using .find() to return the element that does not exist in 2nd input or return 0
function findDeletedNumber(arr, mixArr) {
    return arr.find ((element) => {return !mixArr.includes (element)}) || 0;
  }

// Clever use of .reduce() being used only once
function findDeletedNumber(a, b) {
    return [...a, ...b].reduce((c,d) => c ^ d, 0);
}