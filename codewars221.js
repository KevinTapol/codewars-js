// Fix string case
/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/

// Parameters or Edge Cases:
/*
    inputs will be a string of uppercase and lowercase letters
    inputs will not be empty or null
*/

// Return:
/*
    the input string in all uppercase if more than half of the letters are uppercase else return the inputs in all lowercase
*/

// Examples:
/*
    "code" => "code"
    "CODe" => "CODE"
    "COde" => "code"
    "Code" => "code"
*/

// Pseudocode:
/*
    // declare a global variable up_count and set it equal to 0
    // iterate through the string and for each element is it's uppercase version add 1 to count
    // if count is greater than the length of the input divided by 2 return the entire input to uppercase else lowercase
*/

// my answer
function solve(s){
    // declare a global variable up_count and set it equal to 0
    let count = 0
    // iterate through the string and for each element is it's uppercase version add 1 to count
    for (let i = 0; i < s.length; i++){
        if (s[i] === s[i].toUpperCase()) {
            count += 1
        }

    }
    // if count is greater than the length of the input divided by 2 return the entire input to uppercase else lowercase
    if (count > s.length / 2) {
        return s.toUpperCase()
    } else {
        return s.toLowerCase()
    }
    
}

// my answer refactored one line for loop with a return ternary statement
function solve(s){
    let count = 0
    for (let i = 0; i < s.length; i++) if (s[i] === s[i].toUpperCase()) count += 1
    return count > s.length / 2 ? s.toUpperCase() : s.toLowerCase()
}

// arrow function implicit return nested arrow function for loop with a ternary implicit return
const solve = (s, count = 0) => ((() => { for (let i = 0; i < s.length; i++) { if (s[i] === s[i].toUpperCase()) count += 1; } })(), count > s.length / 2 ? s.toUpperCase() : s.toLowerCase());


console.log(solve("code")) // "code"
console.log(solve("CODe")) // "CODE"
console.log(solve("COde")) // "code"
console.log(solve("Code")) // "code"

// arrow function implicit return using array methods and .reduce(accumulator, current_value) instead of a for loop 
const solve = (s) => (s.split('').reduce((c, v) => (v === v.toUpperCase() ? c + 1 : c), 0) > s.length / 2 ? s.toUpperCase() : s.toLowerCase());

// best practices 
// similar to my unrefactored answer but using two variables for lowercase and uppercase
function solve(s){
    let lowerC = 0;
    let upperC = 0;
    for( let i = 0;i<s.length;i++){
      if( s[i] == s[i].toUpperCase()){
        upperC++;
      }
      else{
        lowerC++;
      }
    }
    return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}

// most clever
// using regex replacing all capital letters with empty strings and comparing the original length to the result
const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()

// creating an array and filtering where each element is uppercase
// then compare the length of the array to the original input minus the array
function solve(s){
    let upper = s.split('').filter(x => x === x.toUpperCase()).length
    let lower = s.length - upper
    return (upper > lower) ? s.toUpperCase() : s.toLowerCase() 
  }

// similar to most clever but using lowercase instead of uppercase for regex
function solve(s){
    return s.replace(/[a-z]/g,'').length>s.length/2 ? s.toUpperCase() : s.toLowerCase()
  }

// converting to an array of elements to use .reduce()
function solve(s){
    return s.split('').reduce((a,v)=>v===v.toUpperCase()?a+1:a-1,0)>0?s.toUpperCase():s.toLowerCase()
}

// using a spread operator ... to iterate through the input string then using .reduce()
function solve(s){
    return [...s].reduce((t,c)=>t+/[a-z]/.test(c)*2,0)<s.length?s.toUpperCase():s.toLowerCase();
  }