/*
Move 10
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.

Parameters or Edge Cases:
    inputs will be a single string of chars from a-z
    inputs will never be empty

Return:
    the string of chars but with each char code + 10 in value

Examples:
    "testcase" --> "docdmkco"
    "codewars" --> "mynogkbc"
    "exampletesthere" --> "ohkwzvodocdrobo"

Pseudocode:
    convert the input string into an array where each string char is an element
    iterate through the array of chars using their char code value adding 10 to the value
    if the integer exceeds charCodeAt() z of 122 then subtract by 122 and add 96 which results in the original value - 16
    return the char from the new value
    convert the array back into a single string and return it
*/

// My Answer
function moveTen(s){
    return s.split('').map(e => e.charCodeAt() + 10 > 122 ? String.fromCharCode(e.charCodeAt() -16) : String.fromCharCode(e.charCodeAt() + 10)).join('')
}

// My Answer refactored one liner arrow fn
const moveTen = s => s.split('').map(e => e.charCodeAt() + 10 > 122 ? String.fromCharCode(e.charCodeAt() -16) : String.fromCharCode(e.charCodeAt() + 10)).join('')
console.log(moveTen("testcase")) // "docdmkco"
console.log(moveTen("codewars")) // "mynogkbc"
console.log(moveTen("exampletesthere")) // "ohkwzvodocdrobo"

// Best Practices same as my answer but reversed ternary
function moveTen(s){
    return s.split('').map(e => e.charCodeAt(0) + 10 > 122 
    ? String.fromCharCode(e.charCodeAt(0) - 16) 
    : String.fromCharCode(e.charCodeAt(0) + 10)).join('');
}

// Most Clever
// using regex and arrays as the index value of each char
function moveTen(s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let move10 = 'klmnopqrstuvwxyzabcdefghij';
    return s.replace(/[a-z]/g, x => move10[alphabet.indexOf(x)]);
}

// very clever to divide by 26 which is the number of chars used in order related to stepped integer value and use the remainder for calculations of letters past z
const moveTen = s => s.replace(/./g, val => String.fromCharCode(97 + (val.charCodeAt() - 87 ) % 26));

// regex replace()
function moveTen(s) {
    return s.replace(/[a-z]/g, char => String.fromCharCode(97 + (char.charCodeAt(0) - 97 + 10) % 26));
}

// clever to use index of values of chars + 10 with regex .replace(pattern, replacement)
const moveTen = s => s.replace(/./g, c => 'klmnopqrstuvwxyzabcdefghij'[c.charCodeAt(0)-97]);

// I like how clean this answer is by dedicated variables for reference
const alpha = 'abcdefghijklmnopqrstuvwxyz';
const map   = 'klmnopqrstuvwxyzabcdefghij';
const moveTen = s => [...s].map(x => map[alpha.indexOf(x)]).join('');

// clever to declare a fn for the 2nd argument parameter for .replace(regex, fn translate)
function moveTen(s){
    const o = {
      a:"abcdefghijklmnopqrstuvwxyz",
      t:"klmnopqrstuvwxyzabcdefghij"                                                                
    }
    const translate = n => o.t[o.a.indexOf(n)]
    return s.replace(/[a-z]/gi, translate)
}