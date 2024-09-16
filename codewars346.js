/*
Working with arrays I (and why your code fails in some katas)

In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

Good luck!

Hint: watch out for side effects.

Parameters or Edge Cases:
    inputs will be arrays with positive integers as elements

Return:
    return the input array without the final element in the array

Examples:
    [1, 2, 3, 4, 5] --> [1, 2, 3, 4]
    [6, 7, 8, 9] --> [6, 7, 8]

Pseudocode:
    slice the input array from index 0 to final index -1 keeping in mind that .slice() first param is inclusive and second param is exclusive
*/

// My Answer and Best Practices
function withoutLast(arr) {
    return arr.slice(0,-1)
}

// My Answer refactored one liner arrow fn
const withoutLast = arr => arr.slice(0,-1)

console.log(withoutLast([1, 2, 3, 4, 5])) // [1, 2, 3, 4]
console.log(withoutLast([6, 7, 8, 9])) // [6, 7, 8]

// Most Clever
// here they maintain the initial code to fix of arr.pop() but first they create an array copy of the input array to not mutate the input 
function withoutLast(arr) {
    arr = [...arr]
    arr.pop();
    return arr;
}

// using .filter()
function withoutLast(arr) {
    arr = arr.filter((e,i)=> i !== arr.length-1)
    return arr;
}

// while loop
function withoutLast(arr) {
    let res = [];
    let i = 0;
    while (i < arr.length - 1) {
      res.push(arr[i]);
      i++;
    }
    return res;
}