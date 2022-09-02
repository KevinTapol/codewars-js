// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// Parameters or Edge cases: input will be a string with the first character being a single digit positive integer
// Return: an integer
// Examples: input may be "1 year old" or "5 years old"
// Psuedo code:  take the character at index 0 then turn it into an integer and return that intger
//               first thought would be .charAt(0) and use + to change it into a number
//               since its straight forward I might as well arrow fn one line it

// my answer w/o arrow fn
function getAge(inputString){
    return +inputString.charAt(0)
}

// my arrow fn answer
const getAge = inputString => +inputString.charAt(0)

// best practices used .parseInt()
function getAge(inputString){
    return parseInt(inputString);
}

// 2nd best practices targeted the first index
function getAge(inputString){
    return parseInt(inputString[0]); 
}

// most clever
const getAge = parseInt;

// using .match() with regex
function getAge(inputString){
    return inputString.match(/[0-9]/)[0] * 1;
}

// using .replace() with regex
function getAge(inputString){
    return +inputString.replace(/[^\d]/g,'');
}

// using .split(' ') to turn into an array then loop through it using a ternary to return the element that is a number or return an emtpy string
function getAge(inputString){
    let res = inputString.split(' ');
    for (let i in res) {
        return res[i] != NaN ? +res[i] : '';
    }
}

// using Number() object method
function getAge(inputString){
    return Number(inputString[0]);
}