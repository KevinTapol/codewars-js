/*
Determine if the poker hand is flush

Parameters or Edge Cases:
    inputs will be an array of strings
    input arrays will have a length of 5
    individual elements will represent a value of a playing card 2 - A followed by their suit HSDC and will be uppercase

Return:
    boolean true if all elements contain the same suit meaning last string else false

Examples:
    [  "AS", "3S",  "9S", "KS", "4S" ] -->  true
    [  "AD", "4S",  "7H", "KC", "5S" ] --> false
    [  "AD", "4S", "10H", "KC", "5S" ] --> false
    [  "QD", "4D", "10D", "KD", "5D" ] -->  true
    [ "10D", "4D",  "QD", "KD", "5D" ] -->  true

Pseudocode:
    create an array copy of the input array of only the last char of each element
    create a unique set of the copy
    if the copy is a length of 1 then return true else false
*/

// My Answer
function isFlush(cards) {
    let arr = cards.map(e => e.slice(-1))
    return [...new Set(arr)].length === 1 ? true : false
}

// My Answer refactored
function isFlush(cards){
    return [...new Set(cards.map(e => e.slice(-1)))].length === 1 ? true : false
}

// My Answer refactored one liner arrow fn
const isFlush = cards => [...new Set(cards.map(e => e.slice(-1)))].length === 1 ? true : false

console.log(isFlush([  "AS", "3S",  "9S", "KS", "4S" ])) // true
console.log(isFlush([  "AD", "4S",  "7H", "KC", "5S" ])) // false

// Best Practices and Most Clever
// using .every() to compare the last char of the first element to each elements last char instead of creating a unique set
function isFlush(cards) {
    return cards.every(a=>cards[0].slice(-1)===a.slice(-1))
}

// using regex to check every last char
isFlush=c=>/([HSDC])(.+\1){4}/.test(c)

// converting to a string to use .match() with regex
function isFlush(c) {
    return !!c.join``.match(/([HSDC])(.+\1){4}/);
}

// Brute force for loop
function isFlush(cards) {
    const first = cards[0].slice(-1);
    for(let i = 1; i < 5; i++){
      if(!cards[i].endsWith(first)) return false;
    }
    return true;
}

// using Array.from(new Set()) instead of [...new Set()]
function isFlush(cards) {
    return Array.from(new Set(cards.map(v => v.slice(-1,)))).length===1
}

// one liner regex
const isFlush = cards => /^\w+(\w),(\w+\1,?){4}$/.test(cards);