// Parameters or Edge cases: function name must be square
//                           inputs will be integers
// Return: a square of the input
// Examples: Test.assertEquals(square(3), 9);
// Psuedo code:  create a function named square that takes in an input 
//               use Math.pow() first value being the input and second value being the power in this case 2

// my answer
function square(num) {
    return Math.pow(num, 2)
}

// my answer arrow function
const square = (num) => Math.pow(num, 2)

// best practices and most clever
const square = (n) => n * n;

// alternate way of saying input to the power of 2
function square(x) {
    return x ** 2;
}

// using eval() and repeat()
square=n=>eval(('+'+n).repeat(n))