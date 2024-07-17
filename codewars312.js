/*
Help the Fruit Guy
Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.


Parameters or Edge Cases:
    If the array is null/nil/None or empty you should return empty array ([]).
    The rotten fruit name will be in this camelcase (rottenFruit).
    The returned array should be in lowercase.

Return:
    the input array removing any instances of the string rotten and with every string element in lowercase
Examples:
    ["apple","rottenBanana","apple"] --> ["apple","banana","apple"]
    ["apple","banana","kiwi","melone","orange"] --> ["apple","banana","kiwi","melone","orange"]
    [] --> []
Pseudocode:
    if the input array exists iterate through the input array and if the element starts with "rotten" then slice after the n, lowercase the string and return the new array
    else return an empty array
*/

// My Answer
function removeRotten(arr){
    return arr ? arr.map((e) => e.slice(0,6) === 'rotten' ? e.slice(6).toLowerCase() : e) : []
}

// My Answer Refactored one liner
const removeRotten = a => a ? a.map((e) => e.slice(0,6) === 'rotten' ? e.slice(6).toLowerCase() : e) : []

console.log(removeRotten(["apple","rottenBanana","apple"])) // ["apple","banana","apple"]


// Best Practices and Most Clever
// using regex string.replace()
function removeRotten(arr){
    return arr ? arr.map(x=>x.replace('rotten', '').toLowerCase()) : [] ;
}

// checks for doesn't exist, undefined or empty no length arrays
function removeRotten(bagOfFruits){
    if (!bagOfFruits || bagOfFruits === undefined || bagOfFruits.length === 0) return [];
    
    return bagOfFruits.map(function (currVal) { return currVal.replace(/rotten/i, '').toLowerCase(); });
  } 

// using .includes()
const removeRotten = bagOfFruits => !bagOfFruits ? [] : bagOfFruits.map(f => f.includes("rotten") ? f.replace("rotten", "").toLowerCase() : f)

// Brute Force For Loop
function removeRotten(bagOfFruits) {
    if (!bagOfFruits) return [];
    let rottenRemoved = [];
    for (let i = 0; i < bagOfFruits.length; i++) {
      rottenRemoved[i] = bagOfFruits[i].replace("rotten", "").toLowerCase();
    }
    return rottenRemoved;
  }