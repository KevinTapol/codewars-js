// Parameters or Edge cases: the function name MUST be MULTIPLY
// Return: product of 2 nums
// Examples:
// Psuedo code:

// my answer
function multiply(x,y){
    return x*y
}

// best practices most clever
let multiply = (a, b) => a * b;

// using typeof
function multiply(a, b){
    if(typeof a == 'number' && typeof b == 'number')
      return a * b;  
}

// Math.imul() function returns the result of the C-like 32-bit multiplication of the two parameters.
const multiply = Math.imul

// arrow fn spread inputs using .reduce() to multiply accumulator and current value
const multiply = (...numbers) => numbers.reduce((acc, curr) => acc * curr);

// check if not a number
// TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.
function multiply(a,b){
    if(isNaN(a) || isNaN(b))
        throw new TypeError("One of the arguments is not numeric.");
        return a*b;
}