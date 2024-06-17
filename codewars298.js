/*
Sort by Last Char

Parameters or Edge Cases:
    inputs will be a string of words

Return:
    Return an array of each word sorted alphabetically by the final character of each word. If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

Examples:
    'man i need a taxi up to ubud' --> ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
    'what time are we climbing up the volcano' --> ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
    'take me to semynak' --> ['take', 'me', 'semynak', 'to'] 

Pseudocode:
    declare an array named arr  of the input string converted into an array for each word as an element
    sort the array by the last character of each word
    if there are more than 1 of the same character, return the word with the lowest index value as it appears arr
*/

// My Answer
function last(x){
    let arr = x.split(' ')
    let revArr = arr.map(e => e.split('').reverse().join(''))
    let sortArr = revArr.sort((a, b) => a.charCodeAt() - b.charCodeAt())
    return sortArr.map(e => e.split('').reverse().join(''))
}

// My Answer Refactored
function last(x){
     return x.split(' ').map(e => e.split('').reverse().join('')).sort((a, b) => a.charCodeAt() - b.charCodeAt()).map(e => e.split('').reverse().join(''))
}

// My Answer One liner arrow fn
const last = (x) => x.split(' ').map(e => e.split('').reverse().join('')).sort((a, b) => a.charCodeAt() - b.charCodeAt()).map(e => e.split('').reverse().join(''))

console.log(last('man i need a taxi up to ubud')) // ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']

// Best Practices and Most Clever
// using .charCodeAt(element.length -1) or last char of word
function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  }

// using .slice(-1) to grab the last element of each word
const last = ( $ ) => $.split(' ').sort((a,b)=> a.slice(-1) > b.slice(-1))

// using localCompare() with .slice() inside of .sort
function last (words) {
    return words.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)))
  }

// same as above but easier to read
const lastChar = (str) => (str[str.length - 1] || '');
const sorter = (a, b) => lastChar(a).localeCompare(lastChar(b));
const last = (str) => str.split(' ').sort(sorter);