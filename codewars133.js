

// Parameters or Edge cases: The strings will not be the same length, but they may be empty ( zero length ).  The length of string is not always the same as the number of characters.
// Return: Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. 
// Examples: (Input1, Input2) --> output
//           ("1", "22") --> "1221"
//           ("22", "1") --> "1221"
//           Test.assertEquals(solution('45', '1'), '1451');
//           Test.assertEquals(solution('13', '200'), '1320013');
//           Test.assertEquals(solution('Soon', 'Me'), 'MeSoonMe');
//           Test.assertEquals(solution('U', 'False'), 'UFalseU');
// Psuedo code:  take the length of both inputs
//               compare the values and take the smallest string and template literal the input in front and at the end of the longer string sandwhiching it. I'll start with regular function with if else then do a one liner arrow function with a ternary

// my answer easily readable simple function and if else template literals
function solution (a, b) {
    if(a.length > b.length) {
        return `${b}${a}${b}`
    } else {
        return `${a}${b}${a}`
    }

}

// my answer arrow function (fat arrow) and ternary template literals
const solution = (a, b) => a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`

// best practices and most clever
// simple function with ternary but no using template literals
// they are using + to concat the strings
function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
}

// I like this answer because they are thinking of multiple solutions and submitting them on a case by case basis
// Using if...else, explicit block syntax
function solution(a, b) {
    if (a.length < b.length) {
        return a + b + a;
    } else {
        return b + a + b;
    }
}
// Using if..., implicit else, compressed syntax
function solution(a, b) {
    if (a.length < b.length) return a + b + a;
    return b + a + b;
}
// Using ternary conditional operator
function solution(a, b) {
    return (a.length < b.length) ? (a + b + a) : (b + a + b);
}
// ES6 arrow function
var solution = (a, b) =>
    (a.length < b.length) ? (a + b + a) : (b + a + b);


// using Math object methods to compare values then return to string
// I didn't know that you could use Math.min() or Math.max() on a string and return a number
const solution = ([a, b]) => (Math.min(a, b)+Math.max(a, b)+Math.min(a, b)).toString();

// a bit much but insteresting how they put the inputs into array ternary then call the values at their indexes
function solution(a, b){
    var sl = a.length < b.length ? [a,b] : [b,a];
    return sl[0] + sl[1] + sl[0];
}