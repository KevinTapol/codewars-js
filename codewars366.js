/*
Filter Coffee

Parameters or Edge Cases:
    first input will be an integer representing budgeted money
    second input will be an array of integers representing each individual coffee price

Return:
    return a single string from an array of elements separated by a comma of the input array of integers that are less than or equal to the budget or first input integer

Examples:
// "Should filter out the prices outside budget"
    3, [6, 1, 2, 9, 2] --> "1,2,2"

// "Should filter out the prices outside budget"
    14, [7, 3, 23, 9, 14, 20, 7] --> "3,7,7,9,14"

// "Should return an empty string when budget is zero"
    0, [6, 1, 2, 9, 2] --> ""

Pseudocode:
    create a filtered array copy of the second input of each element that is equal to or less than the first input integer 
    sort the new array in ascending order
    convert the element of the array into strings
    return the new array
*/

// My Answer, Best Practices and Most Clever
function search(budget, prices) {
    return prices.filter(e => (e <= budget)).sort((a, b) => a - b).join(',')
}

// My Answer refactored one liner arrow fn
const search = (budget, prices) => prices.filter(e => (e <= budget)).sort((a, b) => a - b).join(',')

console.log(search(3, [6, 1, 2, 9, 2])) // "1,2,2"
console.log(search(14, [7, 3, 23, 9, 14, 20, 7])) // "3,7,7,9,14"
console.log(search(0, [6, 1, 2, 9, 2])) // ""

// arr.toString() converts the entire contents of the input array into a single string
const search = (budget, prices) => prices.filter(v => v <= budget).sort((a, b) => a - b).toString();

// using string interpolation `${input}` to convert the input into a string
const search = (budget, prices) => `${prices.filter(val => val <= budget).sort((a, b) => a - b)}`

// using .forEach instead of .filter to create an array copy
function search(budget, prices) {
    var arr = [];
    prices.forEach(function(p){
      if(p<=budget)
        arr.push(p);
    });
    return arr.sort(function(a,b){ return a > b }).join();
}

// brute force for loop instead of .forEach()
function search(b, p) {
    let a = p.sort((z,x)=>z-x);
    let r = [];
    for(let i = 0; i < a.length; i++)
      if(a[i] <= b) r.push(a[i])
    return r.join(',')
}