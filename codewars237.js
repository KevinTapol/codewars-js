// Greet Me
/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/ 

// Parameters or Edge Cases:
/*
    inputs will be strings of letters with random upper or lowercase
    can inputs be empty or null?
*/ 

// Return:
/*
    the string "Hello input!" but with the input first character to uppercase and everything else to lowercase
*/ 

// Examples:
/*
"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/ 

// Pseudocode:
/*
    // create concatenated copy of the first letter to uppercase with the rest of the string to lowercase
    // return a string greet using template literals `Hello ${}!`
*/

// my answer
function greet (name) {
    // create concatenated copy of the first letter to uppercase with the rest of the string to lowercase
    result = name[0].toUpperCase() + name.slice(1).toLowerCase()
    // return a string greet using template literals `Hello ${}!`
    return `Hello ${result}!`
};

// my answer refactored
function greet (n) {
    return `Hello ${n[0].toUpperCase() + n.slice(1).toLowerCase()}!`
}

// arrow fn implicit return for Codewars
const greet = (n) => `Hello ${n[0].toUpperCase() + n.slice(1).toLowerCase()}!`

console.log(greet("riley")) // "Hello Riley!"
console.log(greet("JACK")) // "Hello Jack!"


// best practices and most clever is creating the method .capitalize() which exists in Python
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function(name) {
return "Hello " + name.capitalize() + "!";
};

// same as my answer but using concatenation instead of template literals
var greet = function(name) {
    return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
  };

// using regex
const greet = name =>
  `Hello ${name.toLowerCase().replace(/^\w/, val => val.toUpperCase())}!`;

//  regex again different code but same idea
function greet(name) {
    name = name.toLowerCase();
    
    return `Hello ${name.replace(/^[a-z]{1}/gi, letter => letter.toUpperCase())}!`;
  }