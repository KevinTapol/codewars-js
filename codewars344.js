/*
For the sake of argument

Write a function named numbers.

function should return True if all parameters are of the Number type.

The function should accept any number of parameters.

Example usage:

numbers(1, 4, 3, 2, 5); // true
numbers(1, "a", 3); // false
numbers(1, 3, NaN); // true

Parameters or Edge Cases:
    inputs will vary in number and type

Return:
    return boolean true if all inputs are of type number or NaN else false

Examples:
    1, 4, 3, 2, 5 --> true
    1, "a", 3 --> false
    1, 3, NaN --> true

Pseudocode:
    use a spread operator to iterate through the inputs and check if every() input is typeof() number
    return true if all inputs are numbers else false
*/
function numbers(...inputs){
    return inputs.map(e => typeof(e) === 'number').length === inputs.length
}

console.log(numbers(1, 4, 3, 2, 5))