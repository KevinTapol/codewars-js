// Simple Fun #176: Reverse Letter
/*
Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/

// Parameters or Edge Cases:
/*
    inputs will be a string with lowercase letters, numbers and special characters
    inputs will not be empty or null
*/

// Return:
/*
    the input string in reverse and containing only lowercase letters
*/

// Examples:
/*
    "krishan" => "nahsirk"
    "ultr53o?n" => "nortlu"
    "ab23c" => "cba"
    "krish21an" => "nahsirk"

})})
*/

// Pseudocode:
/*
    // create a copy of the input matching only lowercase letters from a-z with regex named result
    // reverse result using .reverse()
    // convert the array into a string omitting the default commas with .join('')
    // return the result
*/

// my answer
function reverseLetter(str) {
    // create a copy of the input matching only lowercase letters from a-z with regex named result
    let result = (str.match(/[a-z]/g))
    // reverse result using .reverse()
    let x = result.reverse()
    // convert the array into a string omitting the default commas with .join('')
    let y = x.join('')
    // return the result
    return y
  }

// my answer refactored for Codewars  
function reverseLetter(str) { 
    return (str.match(/[a-z]/g)).reverse().join('')
  }

// my answer arrow function implicit return also Most Clever
const reverseLetter = (str) => (str.match(/[a-z]/g)).reverse().join('')

// console.log(reverseLetter("krishan")) // "nahsirk"
console.log(reverseLetter("ultr53o?n")) // "nortlu"
// console.log(reverseLetter("ab23c")) // "cba"
// console.log(reverseLetter("krish21an")) // "nahsirk"

// Best Practices
// here they use regex replacing all characters that are not lowercase letters 
// they also using .split('') to convert to an array .reverse() to reverse the array and .join('') to convert the answer back into a string without commas
reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');

// using regex with .filter()
function reverseLetter(str) {
    return str.split('')
              .reverse()
              .filter(val => /[a-zA-Z]/.test(val))
              .join('');  
  }

// brute force for loop
function reverseLetter(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i].toLowerCase() === str[i].toUpperCase()) {
            continue;
        }
        reversedString += str[i];
    }
    return reversedString;
}

// nested for loop similar to python for element in object
function reverseLetter(str) {
	let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let word = '';
	for(let i = str.length - 1; i >= 0; i--){
		for(let k= 0; k <= alphabet.length - 1; k++){
			if(str[i] == alphabet[k]){
				word = `${word + str[i]}`;
			}
		}
	}
	return word;  
}

// using a spread operator to iterate through the input string with []...] with .reduce() to concat the regex
function reverseLetter(str) {
    return [...str].reduce((s, c) => /[A-Z]/i.test(c) ? c + s : s, "")
  }

// very clever imo using not in indexOf() returning -1 if it is not in the string
function reverseLetter(str) {
    return str.split('').reverse().filter(function(el) {
      if('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(el) != -1) {
        return el;
      }
    }).join('');
  }