// Expressions Matter
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

// Parameters or Edge cases: inputs will be 1-10
//                           you can use same operation more than once or mix and match
//                           input numbers can have duplicates
//                           you CANNOT swap the order of the inputs
// Return:
// Examples: With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
//           1 * (2 + 3) = 5
//           1 * 2 * 3 = 6
//           1 + 2 * 3 = 7
//           (1 + 2) * 3 = 9
// Psuedo code:  CANNOT change the order means I cannot simply .sort() ascending and add every one then multiply by every value not one 
//               this will be a series of if else statments first cases will be testing for ones 
//               next will be testing for smallest values to add to each other then multiply by the largest value

// My answer 
// Next time I'll make sure I take my breaks. I completely forgot about Math.max() and nesting multiple conditions inside of multiple conditions.
function expressionMatter(a, b, c) {
    if(a === 1 && b === 1 && c === 1){
        return a + b + c
    } else if (a === 1 && c === 1) {
        return a + b + c
    } else if (b === 1 && a <= c) {
        return (a + b) * c
    } else if (b === 1 && c <= a) {
        return a * (b + c)
    } else if (a === 1 && b === 1 && c !== 1) {
        return (a + b) * c
    } else if (a !== 1 && b === 1 && c === 1) {
        return a * (b + c)
    } else if (a === 1 && b < c) {
        return (a + b) * c
    } else if (a === 1 && b!== 1 && c !== 1) {
        return (a + b) * c
    } else if (c === 1) {
        return a * (b + c)
    } else if (b !== 1 && a <= c) {
        return (a * b) * c
    } else if (b !== 1 && c <= a) {
        return a * (b * c)
    }
}

// best practices and most clever
// Math.max() returns the highest value output given the parameter combinations.
// In other words, think of every possible combination of math symbols and slap them inside of Math.max(). Math.max() will run through every listed combination and then return the combination with the highest value output.
// The last 2 test cases are not needed because they are covered by the previous possible combinations.
function expressionMatter(a, b, c) {
    return Math.max(
        a + b + c,
        a * b * c,
        a * (b + c),
        (a + b) * c,
        a + b * c,
        a * b + c,
    );
}

// the one liner
const expressionMatter=(a,b,c)=>Math.max(a + b + c, a * (b + c), (a + b) * c, a * b * c);

// Interesting creating an array of combinations so that you use Math.max() with .reduce() 
function expressionMatter(a, b, c) {
    let arr = [];
    arr.push(a + b + c);
    arr.push(a * b * c);
    arr.push(a + b * c);
    arr.push(a * b + c);
    arr.push((a + b) * c);
    arr.push(a * (b + c));
    return arr.reduce((a,b) => Math.max(a, b));
}

// An incredibly cleaner version of if else then mine. I really need to stop skipping my breaks.
function expressionMatter(a, b, c) {
    if (a == 1 && b == 1 && c == 1) {
        return 3;
    } else if (a == 1 && c == 1) {
        return a + b + c;
    } else if ((a == 1 || c == 1) || (a != 1 && b == 1 && c != 1)) {
        return a < c ? (a+b)*c : a*(b+c);
    } else {
        return a * b * c;
    }
}

// Inerseting Create every possible combination for loop through and  compare each value taking the highest outcome.
function expressionMatter(a, b, c) {
    var tests = [
        (a + b) + c,
        (a * b) + c,
        (a + b) * c,
        (a * b) * c,
        a + (b + c),
        a * (b + c),
        a + (b * c),
        a * (b * c),
        a + b + c,
        a + b * c,
        a * b + c,
        a * b * c,
    ]
    var highest = 0

    for (var i = 0; i < tests.length; i++) {
        if (tests[i] > highest) {
            highest = tests[i]
        }
    }return highest
}