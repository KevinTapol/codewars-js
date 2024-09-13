/*
For the sake of argument

NOTE ignore test current issue bug. Go straight to attempt/submit

Parameters or Edge Cases:
    inputs will vary in number and type
    NaN is considered type of number

Return:
    return boolean true if all inputs are of type number or NaN else false

Examples:
    1, 4, 3, 2, 5 --> true
    1, "a", 3 --> false
    1, 3, NaN --> true

Pseudocode:
    use a spread operator on the input argument to create an array of all the inputs
    iterate through the array of inputs and check if every() input is typeof() number
    using .every() will return true if all inputs are numbers else false
*/
function numbers(...inputs){
    return inputs.every(e => typeof(e) === 'number')
}

console.log(numbers(1, 4, 3, 2, 5)) // true
console.log(numbers(1, "a", 3)) // false
console.log(numbers(1, 3, NaN)) // true

// Best Practices and Most Clever
// The reason this is Best Practices and Most Clever is this solution solves the issue of the TTD not being included by default.
function numbers() {
    return [].every.call(arguments, function(value) {
      return typeof value === "number";
    });
}

// Very Clever using spread operator in the return instead of arguments being passed in through parenthesis
function numbers() {
    return [...arguments].every(x => typeof x === "number");
}

// Clever to compare by .length
var numbers = function() {
    return Array.prototype.filter.call(arguments, function(n) { return typeof n !== 'number'; }).length === 0;
}

// using !array.some() instead of .every
const numbers = (...arr) =>
    !arr.some(val => typeof val !== `number`);

// Brute force for loop
function numbers(...args){
    for(let e of args){
      if(typeof e !=='number') return false
    }
    return true
}