/*
Bingo ( Or Not )
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
Parameters or Edge Cases:
    inputs will be an array containing integers from 1 to 26 representing uppercase letters A-Z
    duplicate integers can exist
Return:
    return "WIN" if the input array contains the integers 2, 7, 9, 14, 15 else "LOSE"
Examples:
    [1,2,3,4,5,6,7,8,9,10] --> "LOSE"
    [21,13,2,7,5,14,7,15,9,10] --> "WIN"

Pseudocode:
    declare an array named bingo with the integers 2, 7, 9, 14, 15
    iterate through the bingo array and if the input array does not include the elements from the array bingo return "LOSE" else "WIN"

    ways to remove duplicates 
    [...new Set(arr)]
    arr.filter((e,i) => arr.indexOf(e) === i)
    arr.reduce((acc, c) => acc.includes(c) ? acc : [...acc, c], [])
*/

// My Answer
function bingo(a) {
    const bingo = [2, 7, 9, 14, 15]
    for(e of bingo){
        if(!a.includes(e)){
            return "LOSE"
        }
    } return "WIN"
}

// My Answer Refactored using array methods
// Here I created a shallow copy of the input array grabbing only values that exist in both the input and the array bingo. Then I remove duplicates creating another array iteration with Set. Finally if the array lengths are equal, then return "WIN" else "LOSE"
function bingo(a) {
    const bingo = [2, 7, 9, 14, 15]
    return [...new Set(a.filter((e) => bingo.includes(e)))].length === bingo.length ? "WIN" : "LOSE"
}

console.log(bingo([1,2,3,4,5,6,7,8,9,10])) // "LOSE"
console.log(bingo([21,13,2,7,5,14,7,15,9,10])) // "WIN"

// Best Practices and Most Clever
// I always forget about .every() if every element from the bingo array exists in the input array return "WIN" else "LOSE"
const bingo = ar => [2,7,9,14,15].every(e => ar.includes(e)) ? 'WIN' : 'LOSE';

// same as Best Practices and Most Clever but not using a one liner arrow fn
function bingo(a) {
    return [2,9,14,7,15].every(x => a.includes(x)) ? "WIN" : "LOSE"
}

// similar to my brute force for loop but here they are iterating by index instead of element
function bingo(a) {
    let n = [2,9,14,7,15]
    for(let i =0; i< n.length;i++){
    if(!a.includes(n[i])){ return 'LOSE' }
    }
    return 'WIN'
}

// Very Clever iterating through win scenario and creating a shallow copy array of the charCodeAt() for letters of bingo then using .every() to check of every charCodeAt() for bingo exists in the input
function bingo(a) {  
    return ([...'bingo']
            .map(x => x.charCodeAt(0)-96)
            .every(o => a.includes(o))) ? "WIN" : "LOSE" ;
} 

// one liner .every() element from charCodeAt() is included in the input
const bingo = a => [...`bingo`].every(val => a.includes(val.charCodeAt() - 96)) ? `WIN` : `LOSE`;

// Brute force and chain conditionals of if the input array includes each integer for win scenario
function bingo(a) {
    return a.includes(2) && 
           a.includes(7) &&
           a.includes(9) &&
           a.includes(14) &&
           a.includes(15) ? 'WIN' : 'LOSE';
}