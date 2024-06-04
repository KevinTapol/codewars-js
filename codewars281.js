/*
Spacify

Parameters or Edge Cases:
    inputs will be a string

Return:
    return the given string with spaces inserted between each character

Examples:
    "hello world" --> "h e l l o   w o r l d"
    '12345' --> '1 2 3 4 5'

Pseudocode:
    convert the input string into an array where each index of the string is an element in the array
    convert the array back into a string with a space as a delimiter between each element
*/

// My Answer and Best Practices
function spacify(str) {
     return str.split('').join(' ')
}

// My Answer refactored One line arrow fn
const spacify = str => str.split('').join(' ')

console.log(spacify("hello world")) // "h e l l o   w o r l d"
console.log(spacify('12345')) // '1 2 3 4 5'

// Most Clever using spread operator instead of .split('') to create an array of each string character as an element
const spacify = str => [...str].join(' ');

// Brute Force for loop
// Very Clever imo using a ternary inside of a for loop to add spaces after each index of the string up until the last index element
const spacify = str => {
    let result = ''
    for (let i = 0; i < str.length; i++) {
      result = result + str[i] + (i === (str.length - 1) ? '' : ' ')
    }
    return result
}

// using regex to create spaces around every character then using .trim() to remove the white space on the end and NOT the beginning
const spacify = $ => $.replace(/./g, e => e + ' ').trim()

// using only regex and replace to add whitespace between each character of the string
const spacify = str => str.replace(/(.)(?!$)/g, '$1 ')

// using Array.from(str) to create an array of each character of the string as an element
function spacify(str) {
    return Array.from(str).join(' ');
  }

// using regex with .match() to create an array
const spacify = s => s.match(/./g).join(' ')

// regex and replace 
const spacify = str => str.replace(/.(?=.)/g, '$& ');

// using regex .replace() and .trim()
function spacify(str) {
    return str.replace(/(.)(.)/g,'$1 $2 ').trim();
  }