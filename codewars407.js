/*
Possibilities Array
A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length - 1 (both inclusive).

Write a function that accepts an integer array and returns true if the array is an array of all possibilities, else false.

Examples:

[1,2,0,3] => True
# Includes all numbers between 0 and a.length - 1 (4 - 1 = 3)

[0,1,2,2,3] => False
# Doesn't include all numbers between 0 and a.length - 1 (5 - 1 = 4)

[0] => True
# Includes all numbers between 0 and a.length - 1 (1 - 1 = 0).

Parameters or Edge Cases:
    inputs will be a non empty array of integers

Return:
    return boolean true if a generated array from 0 to the input array length -1 every element exists in the input array else false

Examples:
    [1,2,0,3] --> true
    [0,1,2,2,3] --> false
    [0] --> true
    [0,1,2,3] --> true
    [1,2,3,4] --> false

Pseudocode:
    create an array named check that consists of integer elements starting from 0 to the input array length
    iterate through the array check 
        if the current element of check does not exist in the input array return false
    outside of the iteration return true

*/

// My Answer brute force for loop
function isAllPossibilities(x){
    const check = Array.from({length:x.length}, (e, i) => e = i)
    for(let e of check){
        if(!x.includes(e)){
            return false
        }
    }return true
}

// My Answer refactored
function isAllPossibilities(x){
    const check = Array.from({length:x.length}, (e, i) => e = i)
    for(let e of check){
        if(!x.includes(e)){
            return false
        }
    }return true
}

console.log(isAllPossibilities([1,2,0,3])) // true 
console.log(isAllPossibilities([0,1,2,2,3])) // false

// Best Practices and Most Clever
function isAllPossibilities(x){
	return x.length > 0 ? x.every((a,i) => x.includes(i)) : false;
}

// clever using implicit boolean return
function isAllPossibilities(a){
    return a.length > 0 && a.every((x,i) => a.includes(i));
}

// clever use to set up an accumulative variable to compare for boolean return
function isAllPossibilities(x){
    let tally = 0;
    if (x.length >= 1) { 
      for (let i = 0; i < x.length; i++) {
        if (x.includes(i)){
        tally++;
        }
      }
      return tally === x.length 
    } else return false;
}

// one liner arrow fn using .reduce()
const isAllPossibilities = x => !!x.length && x.reduce((acc, val) => (acc[val]++, acc), Array(x.length).fill(0)).every(Boolean);

// clever using Set to create an array of unique elements
function isAllPossibilities(arr) {
    return arr.length > 0 && (set = new Set(arr), arr.every((_, i) => set.has(i)));
}